# -*- coding: utf-8 -*-
"""
Created on Tue Nov 22 13:24:28 2016

@author: Aaron Goold

Purpose: Practice project for freelance Python gig. 
Special thanks to Joel Grus and his book "Data Science from Scratch"
and Nael Shiab at http://naelshiab.com/tutorial-send-email-python

"""
# http://shop.oreilly.com/category/bestselling.do
import urllib.request
from bs4 import BeautifulSoup
import smtplib
import time

# puts the URL you want to scrape into a variable
theurl = "THE URL YOU WANT, WITH QUOTES"

def webscrape(theurl, price):
    """
    takes a URL, 'theurl', and a price, 'price', and returns prices less than 
    or equal to the 'price'.
    """
    # opens the URL    
    thepage = urllib.request.urlopen(theurl)
    
    # BeautifulSoup makes the HTML of the URL parseable
    soup = BeautifulSoup(thepage, "html.parser")
    
    # initializes the list for saving all of the prices
    lst = []
    
    # finds all of the spans with class=price
    all_price_spans = soup.find_all('span', attrs={'class' : 'price'})
    
    for i in all_price_spans:
        # populates lst with floats of the prices
        lst.append(float(i.string[2:]))
    
    # initializes the list for the prices less than 'price'
    cheap_list = []
    
    for a_price in lst:
        if a_price <= price:
            cheap_list.append(a_price)
            
    # Using the Gmail service, send an email notification for when prices go below 'price'        
    # note: below only works if 'less-secure' apps option is turned on in 
    # gmail: https://www.google.com/settings/security/lesssecureapps

    # if there are prices in cheap_list
    if len(cheap_list) > 0:
        # send a notification
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login("FROM EMAIL ADDRESS", "FROM EMAIL PASSWORD")
        
        # msg holds the text message you want to send
        msg = "There are books under 50 bucks."
        server.sendmail("FROM EMAIL ADDRESS", "TO EMAIL ADDRESS", msg)
        server.quit()
        
        # gives you feedback if your email sent successfully
        print("Email sent")
        return None
        
    else:
        print("No email sent")
        return None
        
# runs the webscrape function every 60 sec
starttime = time.time()

while True:
  webscrape(theurl, 50.00)
  time.sleep(60.0 - ((time.time() - starttime) % 60.0))

    
