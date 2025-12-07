# Implementation Plan: Automated Textbook Generation

**Branch**: `001-create-ai-textbook` | **Date**: 2025-12-03 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-create-ai-textbook/spec.md`

## Summary

This plan outlines the implementation of a Node.js script to automate the creation of a Docusaurus textbook. The script will parse the course structure from `requirements.md`, generate the corresponding directory and file structure in `./my-book/docs`, and use the Gemini CLI to populate each page with AI-generated content. The core technologies used will be the `remark` ecosystem for Markdown parsing and Node.js's native `fs` and `child_process` modules.

## Technical Context

**Language/Version**: `Node.js v18+`
**Primary Dependencies**: `remark`, `unist-util-visit`
**Storage**: `Local file system`
**Testing**: `Manual testing of the generation script.`
**Target Platform**: `Local development machine (with Node.js and Gemini CLI installed)`
**Project Type**: `Single project (script)`
**Performance Goals**: `Full book generation process completes in under 15 minutes.`
**Constraints**: `Requires a pre-existing Docusaurus project at ./my-book. Requires Gemini CLI to be globally installed and authenticated.`
**Scale/Scope**: `Generates a book with ~20-30 pages based on the course outline in requirements.md.`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **I. AI/Spec-Driven Book Creation**: The plan directly implements this core principle using a spec-driven approach.
*   [ ] **II. Integrated RAG Chatbot Development**: Not in scope for this feature.
*   [ ] **III. Reusable Intelligence**: Not in scope for this feature.
*   [ ] **IV. User Authentication**: Not in scope for this feature.
*   [ ] **V. Content Personalization**: Not in scope for this feature.
*   [ ] **VI. Content Translation**: Not in scope for this feature.

**Result**: The plan is compliant with the constitution for the defined scope.

## Project Structure

### Documentation (this feature)

```text
specs/001-create-ai-textbook/
├── plan.md              # This file
├── research.md          # Research on parsing and generation tools
├── data-model.md        # The conceptual model for the script
├── quickstart.md        # Instructions for running the script
├── contracts/           # Contains a README explaining no contracts are needed
│   └── README.md
└── tasks.md             # To be created by the /sp.tasks command
```

### Source Code (repository root)

A new directory will be created to house the generation script and its dependencies.

```text
scripts/
├── book-generator/
│   ├── src/
│   │   ├── index.js     # Main script entry point
│   │   ├── parser.js    # Logic for parsing requirements.md
│   │   └── generator.js # Logic for creating files and calling Gemini CLI
│   └── package.json     # Dependencies (e.g., remark)
└── ...
```

**Structure Decision**: A dedicated `scripts/book-generator` directory will be created to keep the automation logic isolated from the Docusaurus book content.

## Complexity Tracking

No constitutional violations were required. This section is not applicable.