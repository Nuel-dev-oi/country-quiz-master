# BACKEND APP

The backend engine for the Country Quiz application. This is a RESTful API built with Node.js and Express, designed to serve a curated dataset of geography-themed questions with high performance and strict type safety.

##🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Security:** [Helmet](https://helmetjs.github.io/) & [CORS](https://github.com/expressjs/cors)
- **Environment:** [Dotenv](https://github.com/motdotla/dotenv)

## ✨ Key Features

- **RESTful API Architecture:** Follows standard `api/v1` versioning.
- **Robust Error Handling:** Custom middleware for 404 (Not Found) and 500 (Server Error) responses in JSON format.
- **Strict Typing:** Full TypeScript integration for request/response objects and quiz data structures.
- **Security First:** Implements Helmet for HTTP header protection and CORS for secure frontend-backend communication.

## 📂 Project Structure

```text
Backend/
|── src/
│   ├── utils/            # Static TypeScript quiz dataset
│   ├── middlewares/      # Error handling and validation logic
│   ├── routes/           # Express router definitions
│   ├── controllers/      # Route logic and data processing     
│   └── index.ts          # Server entry point
|── .env.example          # Template for environment variables
|── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🚀 Getting Started

1. Prerequisites
Node.js (v18+ recommended)
npm or yarn

2. Installation
```bash
git clone [https://github.com/Nuel-dev-oi/country-quiz-master.git](https://github.com/Nuel-dev-oi/country-quiz-master.git)
cd country-quiz-master/backend
npm install
```

3. Environment Setup
Create a .env file in the root directory:
```text
PORT=5000
NODE_ENV=development
```

4. Run the Server
Development Mode (with auto-reload):
```bash
npm run dev
```
Production Build:
```bash
npm run build
npm start
```

## API End points
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | / | API Welcome Message |
| GET | /api/v1/questions | Fetch all 100 quiz questions |
| GET | /about | API Status and Metadata |