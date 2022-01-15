# b9 - challenger

## Getting started

Clone this repository:

```
git clone https://github.com/lvneto/b9-sistemas
```

### 1. Download example and install dependencies

Install npm dependencies:

```
npm install
```

### 2. Create and seed the database

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed
```

### 3. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3001`

