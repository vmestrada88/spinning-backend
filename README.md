# spinning-backend

TypeScript + Express backend with Sequelize migrations.

Local dev:

```bash
cd spinning-backend
npm ci
npm run dev
```

Run migrations locally:

```bash
npx sequelize-cli db:migrate
```

Deploy on Render: connect this folder as a repository or use `render.yaml` sample in this folder.
