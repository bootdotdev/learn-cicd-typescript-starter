Purpose
-------
This repo is a small TypeScript Express app ("Notely") used for a CICD course. The goal of this file is to give AI coding assistants the minimum, actionable knowledge they need to be productive here: where to make changes, important conventions, and how to run/build/test the project.

Quick commands
--------------
- Install deps: npm ci
- Build: npm run build  (runs npx tsc)
- Dev (build + run): npm run dev  (note: no watcher; compiles then runs dist/main.js)
- Run tests: npm run test  (vitest)
- DB: drizzle-kit commands in package.json (db:generate, db:migrate, db:studio)
- CI: .github/workflows/ci.yml uses Node 20 and runs `npm ci` then `npm run test -- --coverage`.

High level architecture (what to edit)
-------------------------------------
- Entry: `src/main.ts` — creates the Express app, serves static files and mounts `v1` routes.
  - Static site root configured in `src/config.ts` (api.filepathRoot).
  - Routes under `/v1` are conditionally registered only when a DB connection exists (see `db` in `src/db/index.ts`).
- API handlers: `src/api/*.ts` (users.ts, notes.ts, middleware.ts, json.ts, auth.ts). Add new handlers here and register them in `src/main.ts`.
  - Pattern: pure handler functions like `handlerUsersCreate(req,res)` and protected routes wrapped with `middlewareAuth(handler)` which injects a `User` object.
- DB layer: `src/db/schema.ts` (Drizzle schema) and `src/db/queries/*.ts` (query helpers). Use Drizzle types exported from `schema.ts` (`User`, `Note`).
- Config for migrations: `drizzle.config.ts` points at `./src/db/schema.ts` and outputs migrations to `./src/db/migrations`.

Project-specific conventions and gotchas
--------------------------------------
- ESM + TypeScript: package.json sets `type: "module"`. Source files import other modules using `.js` extensions (for example `import { config } from "./config.js"`) to match the compiled ESM output — preserve this pattern when editing imports.
- Optional DB mode: If `DATABASE_URL` (config.db.url) is not set, the server runs without registering DB-backed CRUD endpoints. This is intentional for local exercises; to enable full behavior set `DATABASE_URL` in `.env`.
- Auth: API key authentication uses the `Authorization` header with the scheme `ApiKey` (see `src/api/auth.ts` and `middlewareAuth` in `src/api/middleware.ts`). When adding protected endpoints, wrap handlers with `middlewareAuth(handler)` and accept a `User` parameter.
- Error/JSON helpers: Use `respondWithJSON` and `respondWithError` in `src/api/json.ts` to standardize responses (these enforce JSON payload shapes).
- UUIDs & hashes: Handlers use `uuid` for IDs and generate API keys in `src/api/users.ts`. There is an inline comment about `crypto.pseudoRandomBytes` — consider switching to `crypto.randomBytes` if updating security code.

Editing patterns / examples
---------------------------
- Add a new protected endpoint:
  1. Create handler in `src/api/yourFeature.ts` with signature `(req,res,user)`.
  2. Export it and register in `src/main.ts` only under `if (db) { ... }` so it remains conditional.
  3. Add DB helpers in `src/db/queries/yourFeature.ts` and reuse types from `src/db/schema.ts`.

- Example: `src/main.ts` registers `v1Router.post("/users", handlerUsersCreate)`; protected routes call `middlewareAuth(handler)` so the handler receives the typed `User` object.

Files to read first
-------------------
- `src/main.ts` — how routes and static assets are wired
- `src/config.ts` — env keys and defaults
- `src/api/*.ts` — handler and middleware patterns
- `src/db/schema.ts` and `src/db/queries/*` — data model and helpers
- `drizzle.config.ts` — migration configuration
- `package.json` and `.github/workflows/ci.yml` — scripts and CI expectations

Testing & CI notes
------------------
- Tests run with `vitest`. CI runs tests with coverage (`npm run test -- --coverage`). If you add tests, follow existing test location conventions (see `src/api/firstest.test.ts`).
- Keep tests fast and avoid reliance on external DB in unit tests; DB-backed integration tests should be clearly separated.

If something is unclear
----------------------
- Ask which environment (local/no-db vs DB) you should target. If you need DB access, request the DATABASE_URL or use a local sqlite/turso dev DB.
- If you want me to add a new endpoint, tell me the shape of requests/responses and whether it needs auth or DB access.

Would you like me to merge this into the repo now or change the tone/level of detail? (I can update examples or add a short checklist for PRs.)
