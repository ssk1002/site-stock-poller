sites = 
[
    {
        url: "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG?ref_=ast_sto_dp",
        keywordsToInclude: "add to cart",
        keywordsToExclude: "currently unavailable"
    },
    {
        url: "https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816",
        keywordsToInclude: "queue-it_log",
        keywordsToExclude: "softblock"
    },
    // {
    //     url: "https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149",
    //     keywordsToInclude: "add to card",
    //     keywordsToExclude: "sold out"
    // },
    {
        url: "https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html",
        keywordsToInclude: "add to card",
        keywordsToExclude: "not available"
    },
    {
        url: "https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles",
        keywordsToInclude: " ",
        keywordsToExclude: "sold out"
    },
    {
        url: "https://www.newegg.com/p/N82E16868110292",
        keywordsToInclude: " ",
        keywordsToExclude: "sold out"
    },
    {
        url: "https://www.antonline.com/Sony/Electronics/Gaming_Devices/Gaming_Consoles/1413479",
        keywordsToInclude: " ",
        keywordsToExclude: "out of stock"
    },
];

// 1000 = 1 second, 5000 = 5 seconds
pollFrequency = 5000;

playAlert = true;

webhookURL = "";

module.exports = {
    sites,
    pollFrequency,
    playAlert,
    webhookURL
}