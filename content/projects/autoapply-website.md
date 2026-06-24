---
title: "AutoApply Documentation Site"
description: "The official documentation hub for the AutoApply open-source project."
technologies: ["MkDocs", "Markdown", "Python"]
---

## Documenting the Architecture

A project as complex as AutoApply (featuring dual finite state machines, hexagonal architecture, and an event bus) is useless if nobody knows how to use or contribute to it.

I built the documentation website using **MkDocs Material**. It serves as the central hub for the project, hosting:
*   The **User Guide** for non-technical folks looking to automate their job hunt.
*   The **Developer Guide** for engineers wanting to contribute to the open-source repo.
*   The **Architecture Decision Records (ADRs)**, which track every major technical choice made during development, from the dependency injection refactor to the implementation of the zero-PII Research Module.