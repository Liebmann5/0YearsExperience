---
title: "Research Telemetry Module"
description: "An opt-in, zero-PII data collection pipeline to study the hiring market."
technologies: ["Python", "Cryptography", "Pandas"]
---

## Flipping the Script on Market Data

Nearly all data regarding the job market (ghosting rates, average time-to-hire, salary transparency) is owned and reported by employers and ATS vendors. 

I built the Research Module inside AutoApply to create the first massive, candidate-side dataset. As the bot applies to jobs, it passively records "signals"—such as deceptive "entry-level" jobs requiring 5 years of experience, or forms that force illogical constraints. 

To ensure absolute privacy, the module uses SHA-256 hashing with a local salt to anonymize company names and URLs. It strips all PII (emails, phone numbers) before data is written to the local CSV. It is strictly opt-in, giving candidates a safe way to contribute to a publishable academic dataset that exposes how the modern hiring market actually functions.