
# Learning-React

A repository dedicated to learning and practicing React development.

## Overview

This repository serves as a personal workbook for mastering the fundamentals and advanced concepts of the React.js library. It contains a collection of small projects, code exercises, and notes that document the journey through the React ecosystem.

The content is organized to progressively build skills, covering topics from component creation and state management to routing and API interactions.

## Technologies Used

* **React** (Core Library)
* **JavaScript** (ES6+)
* **HTML/CSS**
# Learning React — Project Collection

This repository is a personal collection of small React projects, learning modules, and exercises used while following tutorials and building hands-on practice apps.

This top-level README gives a short tour of the projects, common prerequisites and commands, and quick notes for the projects you’ll likely run:

## Repository layout (high level)

- `udemy-course/` — a set of course projects and exercises. Notable subfolders include `typescriptWithReact/`, `react-basics/`, `shopping-cart/`, `project-management-app/`, `next-js-shopping-bag/`, and more.
- `react/simple_blog/` — "Dojo Blog": a Create React App example using `json-server` as a mock backend (contains `data/db.json`).
- `supabase/` — "Supa Smoothies": React frontend integrated with Supabase for CRUD operations and real-time updates (requires Supabase keys in a `.env`).

Each project contains its own `README.md` with fuller details. Use this document as a quick entry point.

## Quick prerequisites

- Node.js (LTS recommended, Node 16/18/20+) and npm installed.
- Git (to clone or switch branches).
- Optional tools depending on project: `json-server` (for `simple_blog`), a Supabase project & keys (for `supabase`).

## Common commands (run inside a project folder)

Install dependencies:

```cmd
cd <project-folder>
npm install
```

Run development server (typical):

```cmd
npm start
# or for Vite projects
npm run dev
```

Build for production:

```cmd
npm run build
```

Run tests (if provided):

```cmd
npm test
```

---

## Project quick notes

- react/simple_blog — Dojo Blog
	- Purpose: Demonstrates routing, custom `useFetch` hook, CRUD with a mock API.
	- Mock API: uses `data/db.json` with `json-server`.
	- Run (from `react/simple_blog`):

		```cmd
		npx json-server --watch data\db.json --port 8000
		npm start
		```

- supabase — Supa Smoothies
	- Purpose: Full-stack example integrating React with Supabase (database operations and real-time updates).
	- Requirements: a Supabase project and API keys.
	- Create a `.env` in the `supabase/` folder with:

		```text
		REACT_APP_SUPABASE_URL=your_supabase_url
		REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
		```

	- Run (from `supabase`):

		```cmd
		npm install
		npm start
		```

	- Ensure your Supabase DB has a `smoothies` table (id, title, rating, created_at, etc.). See `supabase/README.md` for schema hints.

- udemy-course/typescriptWithReact
	- Purpose: TypeScript learning module with hands-on examples (beginner → advanced).
	- Compile and run examples:

		```cmd
		cd udemy-course\typescriptWithReact\handsOn
		npx tsc
		node dist\index.js
		```

---

## How this README is organized

This file is intended to be a lightweight index. Each project folder contains a dedicated `README.md` with more details, including the full list of dependencies, scripts, and learning notes. If you plan to run or contribute to a project, open its README first.

## Contributing

If you want to add new projects or improve documentation:

1. Add a new folder at the repository root (or under `udemy-course/`).
2. Include a short `README.md` explaining the project, its goals, and how to run it.
3. Open a pull request describing changes.

If you want me to standardize all project READMEs to a common template (badges, quick-start, CI notes), tell me which projects and I’ll update them.

---

## License

Unless a subproject states otherwise, repository contents are available under the MIT License.

Maintained by Atis007.
