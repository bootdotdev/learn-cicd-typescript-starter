
[![CI Status](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions/workflows/ci.yml)

# learn-cicd-typescript-starter (Notely)

This repository contains the TypeScript starter code for the **Notely** application — part of the *Learn CI/CD* course on [Boot.dev](https://boot.dev).

**Jana's version of Boot.dev's Notely app.**

---

## Local Development

> Make sure you're using **Node.js 22+**.

### 1. Environment Setup

Create a `.env` file in the project root with:

```bash
PORT="8080"
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm run dev
```

* This starts the server in **non-database mode**.
* The app will be available at: [http://localhost:8080](http://localhost:8080)

> No database setup or interactivity is needed yet — instructions will come later in the course.

### 4. Run Tests (with Coverage)

```bash
npm run test
# or with coverage report:
npm run test -- --coverage
```

---

## Useful Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run test`  | Run all tests with Vitest        |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start`     | Run the compiled app             |

---

## CI / Continuous Integration

This repository uses **GitHub Actions** for CI. Every pull request to `main` will automatically:

* Install dependencies (`npm ci`)
* Run all unit tests (`vitest`)
* Generate a code coverage report

Check the [Actions tab](https://github.com/JanaDroubi/learn-cicd-typescript-starter/actions) for workflow runs and logs.

---

## Project Goals

This project is meant to help you learn and practice:

* Git branching & pull requests
* GitHub Actions workflows
* Unit testing with Vitest
* Code coverage reporting
* Automating quality checks in CI

Happy coding! 🚀

