# Quickstart: Automated Book Generation

**Generated**: 2025-12-03

This guide provides instructions on how to run the automated textbook generation script.

## Prerequisites

1.  **Node.js**: Ensure Node.js (v18 or higher) is installed.
2.  **Docusaurus Project**: A functional Docusaurus site must exist in the `./my-book` directory.
3.  **Gemini CLI**: Ensure the Gemini CLI is installed and authenticated on your system.

## Installation

Navigate to the script's directory and install the required Node.js packages:

```bash
# Assuming the script is located at scripts/generate-book.js
# and has a package.json in that directory
cd scripts 
npm install
```

## Running the Script

Execute the script from the root of the repository:

```bash
node scripts/generate-book.js
```

The script will then:
1. Read `requirements.md`.
2. Delete the old content in `my-book/docs`.
3. Generate the new folder structure based on the course outline.
4. Populate each page with AI-generated content using the Gemini CLI.
5. Update `my-book/sidebars.js`.

Upon completion, the new Docusaurus book will be ready to build and preview.
