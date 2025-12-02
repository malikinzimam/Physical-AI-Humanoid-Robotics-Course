---
id: 0003
title: Failed to start Docusaurus server (directory error)
stage: general
date: 2025-12-02
surface: agent
model: gemini-model
feature: none
branch: {{BRANCH}}
user: {{USER}}
command: npm start
labels: ["docusaurus", "error", "npm"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:
---

## Prompt

g

## Response snapshot

Failed to start Docusaurus development server. Error: `package.json` not found in root directory. This was due to incorrect directory context.

## Outcome

- ✅ Impact: Docusaurus server not started.
- 🧪 Tests: None
- 📁 Files: None
- 🔁 Next prompts: Re-attempting to start server with correct `dir_path`.
- 🧠 Reflection: Learned that `cd` in `run_shell_command` does not persist directory changes. Must use `dir_path` for subsequent commands.

## Evaluation notes (flywheel)

- Failure modes observed: Incorrect working directory for `npm start` command.
- Graders run and results (PASS/FAIL):
- Prompt variant (if applicable):
- Next experiment (smallest change to try): Ensure `dir_path` is always correctly set for commands that rely on specific directories.
