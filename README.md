# TODO App

## 🗞️ About The Project
This is a task manager app that allows users to create, manage, and delete tasks. The app features a clean and responsive design, supports dark theme, and includes internationalization for English and French. It utilizes a dummy API for all CRUD operations, ensuring a smooth user experience.

## 🍀 Tech Stack
- **React** ⚛
- **TypeScript** 🦕
- **Zustand** for state management
- **TanStack Query (React Query)** for data fetching
- **React Router** for routing
- **Tailwind CSS** for styling
- **i18next** for internationalization
- **Jest** & **React Testing Library** for testing

## 🎆 Live Demo
[View the live demo here](https://asigment.netlify.app/)

## 💡 Getting Started
To get a local copy up and running, follow these simple steps:

### 🚨 Prerequisites
- Node.js or Bun (optional)
- Package manager (npm, yarn, or bun)

### 🔩 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/musilimu/React-Technical-Assignment.git
   cd React-Technical-Assignment
   ```

2. Install the required packages:
   ```bash
   bun install
   ```
   *Alternatively, you can use npm or yarn:*
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start your local development server:
   ```bash
   bun dev
   ```
   *Alternatively:*
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📂 Project Structure
```
.
├── bun.lockb
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package.json
├── postcss.config.js
├── public
│   └── locales
│       ├── en
│       │   └── translation.json
│       └── fr
│           └── translation.json
├── src
│   ├── api
│   │   ├── todos.ts
│   │   └── users.ts
│   ├── App.tsx
│   ├── components
│   │   ├── NewTask.tsx
│   │   ├── OverView.tsx
│   │   ├── Paginations.tsx
│   │   ├── TeamChat.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   ├── ui
│   │   │   ├── Alert.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Tabs.tsx
│   │   ├── UpdateTask.tsx
│   │   ├── Users.tsx
│   │   └── User.tsx
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   ├── __mocks__
│   │   ├── ky.ts
│   │   └── react-query.tsx
│   ├── state
│   │   └── index.ts
│   ├── __tests__
│   │   └── components
│   │       ├── Nav.spec.tsx
│   │       └── Sidebar.spec.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🧪 Tests
To run tests:
```bash
bun test
```
*Alternatively:*
```bash
npm test
# or
yarn test
```
### 🧪 Unit & Component Tests
A sample test can be found in the `./src/__tests__` directory.

## 🌍 Internationalization
This app supports both English and French using **i18next**. The language can be toggled easily via a UI element.

## 🌑 Dark Theme Support
The app includes a dark theme, which can be toggled to enhance the user experience based on preference.
