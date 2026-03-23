# 🌍 Country Quiz App
[![Deployed with Vercel](https://vercel.com/button)](https://country-quiz-masters.vercel.app/)

An ultra-fast, interactive, and responsive quiz application designed to test your knowledge of world flags, capitals, and geography. This project is built using modern web standards to ensure a smooth user experience and maintainable code.

## 🚀 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Lightning fast HMR)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing for robust logic)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Icons:** Custom SVG Assets

## ✨ Features

- **100 Dynamic Questions:** A deep dataset covering flags, capitals, and global geography.
- **Smart Scoring:** Prevents double-scoring on the same question using a `Record<number, number>` state mapping.
- **Smooth Transitions:** Custom CSS/Tailwind transitions for selection highlights and feedback.
- **Mobile First:** Completely responsive design that adapts from small smartphone screens to large desktops.

## 📂 Project Structure

```text
src/
|── Frontend/
    ├── assets/             # SVG icons (Check_round, Close_round, etc.)
    ├── components/         
    │   ├── Layout.tsx      # Main layout wrapper
    │   ├── NumberTab.tsx   # Top navigation for 10-question sets
    │   ├── Options.tsx     # Logic for answer selection & feedback
    │   ├── Question.tsx    # Display logic for the active question
    │   ├── ResetButton.tsx # Global reset trigger
    │   └── ScoreBoard.tsx  # Real-time score tracker
    ├── utils/
    │   └── countryQuizData.ts # Typed dataset (100 Questions)
    ├── App.tsx             # Main state orchestrator
    └── main.tsx            # Application entry point
```
## 🛠️ Installation & Getting Started
- Clone the repository
```bash
git clone [https://github.com/Nuel-dev-oi/country-quiz-master.git](https://github.com/Nuel-dev-oi/country-quiz-master.git)
cd country-quiz-master
```
- Install Dependencies
```bash
npm install
```
- Launch Development Server
```bash
npm run dev
```
- Production Build
```bash
npm run build
```
## Type Safety
Every question follows a strict QuestionObj interface, ensuring that the UI never breaks due to missing data or malformed API-style responses.

Built with 💙 in Lagos, Nigeria.