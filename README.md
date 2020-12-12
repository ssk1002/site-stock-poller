# Site Stock Poller

This script was inspired by the PS5 hunt. It checks sites every interval provided for some keywords and some exclude words. If those exist it opens the site. Enjoy! :)

Currently this script checks for the PS5 on these sites:
- Amazon
- PS Direct
- GameStop
- Adorama
- Newegg
- Antonline
- BestBuy (commented out since load was taking to long)

## Usage

1. Install with [npm](https://www.npmjs.com/)

```bash
npm install
```

2. Run and you're ready to go

```bash
npm run watch
```

## How to help this project?

This project took me a bit of time to set up, but I know these scalpers with bots have been beating us. Time to get a fair advantage - feel free to shoot me a message on Twitter for help: [@SahirKarani](https://twitter.com/sahirkarani)

Please consider donating to me at the following places:

 - [Paypal](https://www.paypal.com/paypalme/sahirkarani)
 - [Cash App](https://cash.app/$SahirKarani)
 - [Venmo](https://venmo.com/Sahir-Karani)



## Changing Configs

In the config.js file you will see that you can use this script for anything pretty much.

To change the sites, under the site section add/remove a block like this:
```
{
   // URL to search
   url: "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG?ref_=ast_sto_dp",
   // keywords that should be looked for (can be nothing too)
   keywordsToInclude: "add to cart",
   // keywords to make sure aren't there (can be nothing too)
   keywordsToExclude: "currently unavailable"
},
```

To change the poll time, change this

```
// 1000 = 1 second, 5000 = 5 seconds
pollFrequency = 5000;
```

To change the sound on or off, change this

```
// true or false
playAlert = true;
```

To add a slack or other webhook, change this

```
webhookURL = "";
```


## Contributing
Pull requests are welcome! Find my bugs pls.

## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.