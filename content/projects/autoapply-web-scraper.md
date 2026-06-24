---
title: "AutoApply: The Web Scraper Origins"
description: "How a simple script to learn BeautifulSoup turned into a massive automation engine."
technologies: ["Python", "BeautifulSoup", "Selenium"]
---

## From Script to System

*Note: The original name of the AutoApply repository was `Web_Scraper`. I initially created it simply to learn [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) and [Selenium](https://www.selenium.dev/). Once I learned both, I made a tiny script to fill out job applications for myself. That script eventually ballooned into my first massive software architecture project.*

I kept the original repository name for a long time because I thought it was cool to see how I went from writing a basic HTML parser to building a multi-threaded, state-machine-driven agent.

The scraping engine within AutoApply is what powers the Discovery phase. It utilizes a `ResilientNavigator` that automatically falls back from direct URL loading to "human search" emulation if it detects it is being blocked. It pulls JSON-LD metadata where available, and falls back to complex DOM traversal when websites try to obfuscate their job listings.