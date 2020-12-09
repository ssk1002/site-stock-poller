# site-stock-poller

Usage

```
python 3 poller.py <site_link> <keywords> <poll_time> <webhook_url> 
```
site_link = website link which you would like to poll

poll_time = time to re-poll the site in seconds (decimal number)

keywords = keywords to search on site for

webhook_url = optional flag to alert to webhook otherwise will just print to console

example:
```
python3 poller.py http://google.com "google" 5 https://hooks.slack.com/<SOME_COOL_LINK>
```

# Background

This script was inspired by a certain gaming console site during the 5th edition launch. There is a queue which comes up prior to the release of the console, the plan was to search for the keyword queue which comes up when the queue is live and send me a message to a webhook to be alerted when it is time to jump on line. Decided to make this a bit generic to search other sites if needed if there is an "add to cart" button that ever needs to be found. Enjoy, use with caution! :)