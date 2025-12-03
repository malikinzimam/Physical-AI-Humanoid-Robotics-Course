# Data Model: Textbook Structure

**Generated**: 2025-12-03

This document defines the conceptual data model used by the generation script to represent the textbook's structure. This is not a database schema.

## 1. Textbook

Represents the entire Docusaurus book project.

- **Attributes**:
  - `rootDir`: The root path of the Docusaurus project (e.g., `./my-book`).
  - `docsDir`: The path to the documentation folder (e.g., `./my-book/docs`).
  - `sidebarPath`: The path to the `sidebars.js` file.
  - `chapters`: An ordered list of `Chapter` objects.

## 2. Chapter (Module)

Represents a main section of the book, corresponding to a "Module" in the `requirements.md` outline.

- **Attributes**:
  - `title`: The name of the chapter (e.g., "The Robotic Nervous System (ROS 2)").
  - `path`: The file system path for the chapter's directory.
  - `topics`: An ordered list of `Topic` objects.

## 3. Topic (Page)

Represents a single documentation page within a `Chapter`, corresponding to a weekly sub-topic.

- **Attributes**:
  - `title`: The title of the page (e.g., "ROS 2 Nodes, Topics, and Services").
  - `filePath`: The absolute path to the generated `.md` file.
  - `content`: The AI-generated Markdown content of the page.
