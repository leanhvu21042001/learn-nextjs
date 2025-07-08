# Learn Nextjs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Drizzle setup

```sh
npx drizzle-kit migrate
# khi có cập nhập cột mới hoặc type thì chạy 2 dòng dưới.
npx drizzle-kit generate
npx drizzle-kit push
```

## Prisma setup

```sh
npx prisma generate
npx prisma migrate dev --name init
```
