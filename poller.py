#!/usr/bin/python

import sys
import requests
from bs4 import BeautifulSoup
import time

def findKeywordsInBodyOfPage(getReq, keywords):
    soup = BeautifulSoup(getReq.text, features="html.parser")
    body = str(soup.find('body')).lower()
    return keywords.lower() in body

def pollAndNotify(site_link, keywords, webhook_url):
    print("polling site!")
    get = getRawSiteHTML(site_link)
    if get.status_code == 200:
        keywords_found = findKeywordsInBodyOfPage(get, keywords)
        if keywords_found:
            message = "The keywords '{}' you have been searching for on {} have been found!".format(keywords.lower(), site_link)
            print(message)
            if webhook_url is not None:
                sendMessageToWebhook(webhook_url, message)

def sendMessageToWebhook(webhook_url, message):
    msg_body = {"text": message}
    try:
        resp = requests.post(webhook_url, json=msg_body)
    except:
        print("Error posting to webhook but the script is still polling.")
    if resp.status_code != 200:
        print("Error posting to webhook but the script is still polling.")

def getRawSiteHTML(site_link):
    try:
        get = requests.get(site_link)
    except:
        exit(1, "error in getting website")
    return get


def parseArgs(argv):
    if (len(argv) < 3):
        print( 
        "Help - Try running: \n\npoller.py <site_link> <keywords> <poll_time> <webhook_url> \n\n" +
        "site_link = website link which you would like to poll \n\n" + 
        "poll_time = time to re-poll the site in seconds (decimal number)\n\n"
        "keywords = keywords to search on site for \n\n" +
        "webhook_url = optional flag to alert to webhook otherwise will just print to console" )
        exit(1)
    try:
        poll_time = float(argv[3])
    except:
        exit(1, "poll_time could not be converted to a decimal number")
    if (len(argv) == 5):
        return (argv[1], argv[2], poll_time, argv[4])
    return (argv[1], argv[2], poll_time, None)

def main(argv):
    site_link, keywords, poll_time, webhook_url = parseArgs(argv)
    while True:
        pollAndNotify(site_link, keywords, webhook_url)
        time.sleep(poll_time)


if __name__ == "__main__":
    main(sys.argv)