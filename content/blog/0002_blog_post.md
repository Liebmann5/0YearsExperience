---
title: "AA Autonomy feature relies on Deterministic, Pure Mathematics"
date: "2026-06-24"
excerpt: "AutoApply uses spatial geometry and the Hungarian algorithm to read webpages instead of brittle HTML scraping."
---

## The Problem with Web Scraping

If you've ever tried to build a web scraper, you know the pain of CSS selectors. You write a script that looks for `<button class="apply-btn-primary">`, and it works perfectly... until the website pushes an update, changes their class names, or obfuscates their HTML using Tailwind or React. Suddenly, your bot is broken.

When I started taking AA seriously, I realized that relying on hardcoded CSS selectors to find form fields (like "First Name" or "Resume Upload") was going to be a maintenance nightmare. There are thousands of job boards, and they change their code daily.

I needed a way for the bot to "look" at a webpage and understand it the same way a human does. Humans don't read HTML tags; we look at the physical layout of the screen.

## Enter the Math Subsystem

Instead of reading the DOM as a text file, AutoApply utilizes spatial geometry to break down webpages(this idea was sparked by looking at code as hierarchial systems). 

When the bot loads a page, it calculates the exact `(x, y)` coordinates, width, and height of every element on the screen. It builds a mathematical map of the webpage. 

From there, we use pure, deterministic algorithms to understand what we are looking at:
1. **Convex Hull Clustering:** To group elements together (like figuring out which text belongs to which job card), the system calculates the minimum visual distance between elements using Andrew's Monotone Chain algorithm. It "shrink-wraps" the elements visually, ignoring the HTML structure entirely.
2. **The Hungarian Algorithm:** How does the bot know which text box belongs to the word "First Name"? It uses bipartite matching. By calculating the physical distance and DOM-tree distance between every label and every input field on the screen, it mathematically assigns the correct label to the correct input at a fraction of a second.
3. **Ray Casting (Z-axis Occlusion):** To defeat "clickjacking" or invisible security traps, the bot shoots a mathematical ray through the exact center of a target element to see if any transparent `z-index` overlays are blocking it.

## Why This Matters

By shifting from Linguistic/HTML scraping to pure Mathematical perception, AutoApply degrades gracefully. If an Applicant Tracking System changes its entire codebase tomorrow, AutoApply will still be able to fill out the form, because the *visual geometry* of a job application rarely changes.

It was one of the hardest parts of the architecture to build, but ensuring that the bot operates deterministically meant that achieving autonomy was possible (and also not relying on massive, slow AI vision models was pretty tight)!