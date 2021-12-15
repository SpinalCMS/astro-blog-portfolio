---
# imports
setup: |
  import Layout from "../../layouts/PostLayout.astro"

# meta
tags:
    - marketing
    - code
    - chrome
category: coding
featured: true
date: 2020-04-30

# content
title: Dynamic Bookmarks in Google Chrome
description: I needed a simple way to automatically create date ranges for bookmarks in Google Chrome
excerpt: As a digital marketer, I'm constantly loading Google Analytics to view site performance metrics. I have a couple very specific requirements when looking at performance data in Analytics. I need to compare year-over-year data (2020 vs. 2019) and it needs to compare the same day of the week (Monday vs Monday).

# photos
hero: /pages/about/me.jpg
---

## The Issue
As a digital marketer, I'm constantly loading Google Analytics to view site performance metrics. I have very specific requirements when looking at performance data in Analytics:

- I need to compare year-over-year data, ie: 2020 vs. 2019
- I need to make sure I'm comparing the same days of the week, ie: when comparing today vs. last year, I need to compare a Monday vs. Monday, but the dates don't line up nicely, so you're comparing the 22nd vs the 23rd last year.

This can be time consuming when using Google Analytics daily. You've got to load Analytics, get to the property, select the report and set your date ranges. After frustration set in, I resolved to figure out a method to build dynamic bookmarks in Google Chrome.

## The Fix
Let's assume that we want to populate a Google Analytics report with the date range for the current day, versus the same day of the week last year. As I'm writing this on Thursday (4/30/2020), the script will compare to the same Thursday last year (5/02/2019).

Let's get right into the code:

```
function url() {
    // create a new date var
    start_date = new date();
    var start_dd = start_date.getdate();
    var start_mm = start_date.getmonth() + 1; // add one since javascript starts at 0 for january
    var start_yyyy = start_date.getfullyear(); // analytics requires leading zeros for day and month
    
    if (start_dd &lt; 10) { start_dd = '0' + start_dd; }
    if (start_mm &lt; 10) { start_mm = '0' + start_mm; }
    
    // this is the final start date string    
    var start = start_yyyy + start_mm + start_dd;
    
    // do something similar to above, but get the same day of the week, just one year ago
    var end_date = new date();
    // this adjusts the date back one full year
    end_date.setmilliseconds(end_date.getmilliseconds() - 604800000 * 52);
    var end_dd = end_date.getdate();
    
    // same as above, javascript starts counting months at 0 for january
    var end_mm = end_date.getmonth() + 1;
    var end_yyyy = end_date.getfullyear();
    
    // analytics requires leading zeros for it's dates
    if (end_dd &lt; 10) { end_dd = '0' + end_dd; }
    if (end_mm &lt; 10) { end_mm = '0' + end_mm; }
    
    // the final comparison date string
    var end = end_yyyy + end_mm + end_dd;
    
    // insert the url of the report you'd like to load
    // i usually save custom reports and then use those as the base url
    return '** your analytics report url goes here **/%3f_u.date00%3d' + start + '%26_u.date01%3d' + start + '%26_u.date10%3d' + end + '%26_u.date11%3d' + end + '/'; 
};

//tell chrome to open the window
window.open(url(), "_self");
```

#### Bugs and Things to Note
- As of the time of writing this code, Google Chrome didn't like any comments. I assume that's because the bookmark in Google Chrome is one long string, so any comment in your code comments the rest of the code out.
- When I coded this, it wouldn't allow me to simply click the bookmark. I had to right click, or center click to get it into a new tab. However, it looks like that has been fixed now.

### What's Next?
In part two, I'll show you how to adopt this code to allow for other date ranges:
- Yesterday
- Last seven days
- Month to date
- Last month

**Stay tuned!**