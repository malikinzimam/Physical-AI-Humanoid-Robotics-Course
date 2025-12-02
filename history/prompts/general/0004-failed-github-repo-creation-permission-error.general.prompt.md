---
id: 0004
title: Failed to create GitHub repository (permission error)
stage: general
date: 2025-12-02
surface: agent
model: gemini-model
feature: none
branch: {{BRANCH}}
user: {{USER}}
command: create_repository
labels: ["github", "error", "permissions"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:
---

## Prompt

g bikul or main branch bana or kia aap ko meri github ka pata hai

## Response snapshot

Failed to create GitHub repository due to insufficient permissions. The personal access token used does not have the 'repo' scope.

## Outcome

- ✅ Impact: GitHub repository not created.
- 🧪 Tests: None
- 📁 Files: None
- 🔁 Next prompts: Inform user about permission error and ask them to update their PAT.
- 🧠 Reflection: Encountered a GitHub API permission error. Must inform user and guide them on how to resolve it.

## Evaluation notes (flywheel)

- Failure modes observed: GitHub API returned 403 (Forbidden) due to insufficient PAT scope.
- Graders run and results (PASS/FAIL):
- Prompt variant (if applicable):
- Next experiment (smallest change to try): Ask user to check/update PAT permissions.
