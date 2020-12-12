const open = require("open");
const puppeteer = require("puppeteer");
const player = require('play-sound')(opts = {})
const axios = require('axios')

const {sites, pollFrequency, playAlert, webhookURL} = require("./configs");
var sitesFound = 0;

function initializeSites() {
    sites.forEach((site) =>{
        site.tryCount = 1;
        site.run = true;
    });
}

async function siteFound(site) {
    // open the site
    open(site.url);

    // alert the user in console
    const message = `Found the correct keywords to include/exclude on site: ${site.url} :)`
    console.log(message);

    // play the sound
    if (playAlert){
        player.play('./alert.mp3');
    }

    // hit webhook if exists
    if (webhookURL) {
        axios.post(webhookURL, { text: message });
    }
}

async function pollSiteAndCheckForKeywords(browser, site) {
    console.log(`Polling ${site.url} for the ${site.tryCount} time`);

    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    const url = site.url;
    const response = await page.goto(url,{waitUntil: 'load', timeout: 0});
    const responseBody = await response.text();
    const responseStatus = await response.status();


    site.tryCount += 1;
    if (responseStatus === 200){
        if (responseBody.toLowerCase().indexOf(site.keywordsToInclude.toLowerCase() > 0)){
            if ( !site.keywordsToExclude || (site.keywordsToExclude && responseBody.toLowerCase().indexOf(site.keywordsToExclude.toLowerCase()) === -1) ) {
                // mark site as found - play sound, hit webhook, mark site as found
                site.run = false;
                await siteFound(site);
                return 1;
            }
        }
    }
    return 0;
}


async function runSitePolling(browser) {
    console.log('\n\n*******Running next set of polling*******n\n')
    await Promise.all(sites.map(async (site) => {
        if (site.run) {
            sitesFound += await pollSiteAndCheckForKeywords(browser, site);
        }
     }));

    if (sitesFound < sites.length) {
        setTimeout(runSitePolling, pollFrequency, browser);
    } else {
        console.log('congrats all your sites are found :)\n you can exit this program by hitting ctrl + C on your computer');
    }
}

(async function run(){
    initializeSites();
    const browser = await puppeteer.launch({headless:true});
    runSitePolling(browser);
})()