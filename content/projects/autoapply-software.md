---
title: "AutoApply Agent (Core)"
description: "A 100% free, autonomous, open-source agent that discovers, vets, and applies for jobs."
technologies: ["Python", "Selenium", "Playwright", "SpaCy", "GPT4All"]
---

## The AutoApply Core Engine

AutoApply is the flagship project I have spent the last three years building. It is a highly robust, event-driven agent built on a strict **Hexagonal (Ports & Adapters) Architecture**.

### The Pipeline
1. **Discovery:** Pluggable providers search Google, Bing, Indeed, and direct company pages.
2. **Vetting:** Filters candidates based on commute distance (Haversine formula), skill overlap (SpaCy NLP), and title relevance.
3. **Application:** Uses spatial geometry to parse complex ATS forms (Workday, Greenhouse, Lever), uploads resumes, and uses a local, offline LLM (GPT4All) to dynamically answer open-ended "Why do you want to work here?" questions.

### Defense in Depth
To ensure the bot isn't flagged by anti-automation software, it features a heavy evasion framework. It spoofs browser fingerprints, modifies WebGL readouts, uses Bezier curves for mouse movements, and utilizes parabolic timing delays to mimic human keystrokes.

It is built with a **"Worst-Case First"** philosophy: it is designed to run entirely off a USB flash drive on a 2GB RAM library computer with zero admin privileges. 

[Check out the GitHub Repository](https://github.com/Liebmann5/AA)