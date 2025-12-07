# Feature Specification: Create AI-Powered Textbook

**Feature Branch**: `001-create-ai-textbook`  
**Created**: 2025-12-03
**Status**: Draft  
**Input**: User description: "aap meri requirements.md file ko read karka spec banai or dusri bat ye ka requirement me hai aap na claude code ka use karna maghar ma is ki jhaga gemini cli ka use karo ga"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Automated Book Scaffolding from Course Outline (Priority: P1)

As an author, I want to automatically generate the complete chapter and section structure of my Docusaurus book from the course outline present in the `requirements.md` file. This allows me to rapidly create the foundation of the textbook without manually creating dozens of files and folders.

**Why this priority**: This is the core functionality. Without the book structure, no content can be added. It provides the immediate value of saving significant setup time.

**Independent Test**: Can be tested by running the generation command. The test passes if the `my-book/docs` directory is populated with a folder and file structure that mirrors the "Quarter Overview" and "Weekly Breakdown" sections of `requirements.md`.

**Acceptance Scenarios**:

1. **Given** an existing Docusaurus project in `my-book` and a `requirements.md` file with a course outline,
   **When** the author executes the generation command,
   **Then** the system creates a directory structure inside `my-book/docs` corresponding to each Module and Weekly topic.
2. **Given** the book structure has been generated,
   **When** the author inspects the Docusaurus sidebar configuration,
   **Then** the sidebar navigation should accurately reflect the hierarchy of the "Physical AI & Humanoid Robotics" course.

---

### User Story 2 - AI-Generated Content for Each Section (Priority: P2)

As an author, once the book structure is created, I want each section's markdown file to be automatically populated with detailed, AI-generated content that explains the topic for that section.

**Why this priority**: This builds on P1 and delivers the second core value proposition: using AI to write the book's initial draft.

**Independent Test**: Can be tested after P1 is complete. The test passes if a specific markdown file, like `my-book/docs/module-1/ros-2-nodes.md`, contains relevant, well-structured text about "ROS 2 Nodes", not just placeholder content.

**Acceptance Scenarios**:

1. **Given** the generated book structure from P1,
   **When** the author triggers the content generation process,
   **Then** each markdown file in the `docs` directory is updated from a template to contain substantive content relevant to its title.
2. **Given** the content has been generated,
   **When** the author runs `npm run build` inside the `my-book` directory,
   **Then** the Docusaurus site builds successfully without any markdown or configuration errors.

---

### Edge Cases

- **What happens if the `requirements.md` file is missing or empty?** The system should gracefully fail with a clear error message stating that the source file could not be found or is empty.
- **What happens if the Docusaurus project in `my-book/` is missing or has a non-standard structure?** The process should terminate with an error, informing the user that a valid Docusaurus project was not found at the expected location.
- **How does the system handle a failure in the AI content generation for a specific page?** The system should log the error for the specific page, write "Content generation failed." into the markdown file, and continue the process for the remaining pages.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST read and parse the `requirements.md` file to extract the course structure.
- **FR-002**: System MUST generate a hierarchical folder and file structure within the `my-book/docs` directory.
- **FR-003**: The generated structure MUST map the "Module" and "Weekly Breakdown" sections from the source file.
- **FR-004**: System MUST use an AI model (Gemini CLI) to generate educational content for each created markdown file based on its topic.
- **FR-005**: The generated Docusaurus project MUST be buildable via `npm run build`.
- **FR-006**: The system MUST update the Docusaurus sidebar configuration (`sidebars.js`) to reflect the new documentation structure.

### Key Entities *(include if feature involves data)*

- **Textbook**: Represents the entire collection of documents, including configuration and navigation.
- **Chapter (Module)**: A main section of the book, corresponding to a "Module" in the course outline. It contains multiple Topics.
- **Topic (Page)**: A specific subject within a Chapter, corresponding to a weekly sub-topic. It is represented as a single markdown file.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The entire book generation process (scaffolding and content) for the "Physical AI" course completes in under 15 minutes.
- **SC-002**: The generated Docusaurus site (`my-book`) successfully builds with `npm run build` with a 100% success rate.
- **SC-003**: The navigation sidebar in the built site contains at least 95% of the topics listed in the course outline from `requirements.md`.
- **SC-004**: Each generated content page contains at least 200 words of relevant text, ensuring it is more than just a stub.

## Assumptions

- **A01**: The user has a pre-existing, functional Docusaurus project located in the `my-book/` directory.
- **A02**: The AI content generation will be handled via "Gemini CLI", as per the user's explicit instruction, overriding the "Claude Code" mention in `requirements.md`.
- **A03**: The initial AI-generated content is considered a "first draft" and may require further refinement by a human author.
- **A04**: The input `requirements.md` file maintains a consistent structure for headings and lists.