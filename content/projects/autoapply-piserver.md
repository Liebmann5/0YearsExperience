---
title: "AutoApply PiServer: The Academic Data Cluster"
description: "A secure, enterprise-grade, multi-node Raspberry Pi cluster built to ingest, store, and analyze hiring market data."
technologies: ["Raspberry Pi", "Bash / Shell Scripting", "Infrastructure as Code", "Data Engineering", "Security"]
---

## The Real Mission: Trusting the Data

As I built the Research Module for AutoApply, I realized I had a massive architectural challenge. AutoApply was generating incredible, zero-PII data about the hiring market—tracking ghosting rates, deceptive job titles, and ATS behavior. 

But for this data to be academically publishable and scientifically valid, the core AutoApply software had to remain completely isolated and untouched. If the source code could be easily tampered with, the resulting dataset couldn't be trusted. I needed a completely separate, highly secure environment to reliably ingest, hold, and process this research data.

I didn't just need a server. I needed an enterprise-grade data vault.

## The Inspiration: Building a Bare-Metal Cluster

While figuring out how to build this, I discovered [Pi Kubernetes Cluster by Ricardo Sanchez](https://picluster.ricsanfre.com/). I read the entire site top-to-bottom. It introduced me to the world of bare-metal clusters, Infrastructure as Code (IaC), secure networking, and enterprise-grade deployments. 

Inspired by this, I decided to architect the **AutoApply PiServer** not as a single machine, but as a distributed micro-cluster built to professional and academic standards.

## The Cluster Architecture

The PiServer is designed as a multi-node system, separating concerns to maximize security, reliability, and performance:

*   **Node 1 (The Shield):** This Raspberry Pi handles all security. It acts as the gateway managing what data comes in and out of the server. It verifies the integrity of the incoming data from the AutoApply software. If Node 2 or 3 gets overwhelmed, Node 1 is designed to dynamically assist with their workloads.
*   **Node 2 (The Vault):** This Pi is dedicated entirely to database management. Its sole purpose is to securely store the anonymized hiring market data, ensuring it remains pristine and organized for querying.
*   **Node 3 (The Brain - *In Progress*):** The planned third node will be the analytics engine. It will continuously run statistical analyses (like Wilson's score intervals, Fisher's exact tests, and Kendall's Tau) on the database and push live, real-time insights directly to this portfolio website.

## Why Shell Scripts?

If you look at the `PiServer` directory in my repository, you'll see the deployment logic is built using shell scripts (`.sh`). 

This was a highly intentional choice. Following the best practices of Infrastructure as Code I learned from the `picluster` guide, I wanted the server environment to be fully centralized, portable, and reproducible. Instead of manually configuring each Pi, these scripts act as the automation layer. I can wipe a node, run the script, and have the security protocols, database schemas, and networking rules perfectly rebuilt in minutes.

By separating the AutoApply client from the PiServer data cluster, I created a pipeline where the data collection is secure, the storage is reliable, and the future statistical analysis is built on a foundation of absolute data integrity.