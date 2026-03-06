# Contributing to chrome-download-manager

Thanks for your interest in contributing. This document covers what you need to know.

GETTING STARTED

1. Fork the repository on GitHub.
2. Clone your fork locally.

```bash
git clone https://github.com/<your-username>/chrome-download-manager.git
cd chrome-download-manager
npm install
```

3. Create a branch for your work.

```bash
git checkout -b feature/my-change
```

DEVELOPMENT

Build the project with TypeScript.

```bash
npm run build
```

Run the test suite.

```bash
npm test
```

Make sure both pass before submitting your changes.

PULL REQUESTS

- Keep PRs focused on a single change.
- Write clear commit messages that explain what changed and why.
- Add or update tests if your change affects behavior.
- Make sure the build and tests pass.
- Reference any related issues in the PR description.

REPORTING ISSUES

Use the GitHub issue templates for bug reports and feature requests. Include enough detail to reproduce the problem or understand the proposal.

CODE STYLE

- TypeScript with strict mode enabled.
- Keep functions small and focused.
- Use async/await over raw promises.
- Export types alongside implementations.

LICENSE

By contributing, you agree that your contributions will be licensed under the MIT License.
