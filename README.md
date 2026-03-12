Here’s a clean, complete, and well-structured version of your **README.md** file for the Notely project (Boot.dev CI/CD course). It includes:

- The CI badge at the top (clickable)
- Your personal note
- All the original local development instructions
- Some nice formatting and sections for better readability

Copy-paste this entire content into your `README.md` file:

```markdown
[![CI Status](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions/workflows/ci.yml)

# learn-cicd-typescript-starter (Notely)

This repo contains the TypeScript starter code for the "Notely" application — part of the "Learn CI/CD" course on [Boot.dev](https://boot.dev).

**Jana's version of Boot.dev's Notely app.**

## Local Development

Make sure you're on **Node.js version 22+**.

### 1. Environment Setup

Create a `.env` file in the root of the project with the following contents:

```bash
PORT="8080"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev
```

This starts the server in **non-database mode**.  
It will serve a simple webpage at `http://localhost:8080`.

**You do not need to set up a database or any interactivity on the webpage yet.**  
Instructions for that will come later in the course.

### 4. Run tests (including coverage)

```bash
npm run test
# or with coverage report:
npm run test -- --coverage
```

### Useful scripts

- `npm run dev` → start development server
- `npm run test` → run all tests with Vitest
- `npm run build` → compile TypeScript to JavaScript
- `npm start` → run the compiled app

## CI / Continuous Integration

This repository uses GitHub Actions for CI.  
Every pull request to `main` automatically:

- Installs dependencies (`npm ci`)
- Runs all unit tests (`vitest`)
- Generates code coverage report

See the [Actions tab](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions) for workflow runs and logs.

## Project Goals

This repo is used to learn and practice:
- Git branching & pull requests
- GitHub Actions workflows
- Unit testing with Vitest
- Code coverage reporting
- Automating quality checks in CI

Happy coding! 🚀
```
