# React Task Manager

A simple, modern task manager built with React and Tailwind CSS.

## Features

- Add, view, and delete tasks
- Each task includes a name, due date, and description
- Responsive, clean UI with Tailwind CSS
- Tasks are saved in your browser’s local storage
- Tested with React Testing Library

## React Concepts Used

### React Hooks

This app uses React hooks such as:
- `useState` for managing the list of tasks and form inputs
- `useEffect` for syncing tasks with local storage

### State Management

All state is managed locally in the `App` component using React’s built-in state management (`useState`). The list of tasks and form fields are stored as state variables.

### Prop Drilling

The app demonstrates **prop drilling** by passing task data and handler functions (like `onDelete`) from the parent `App` component down to child components such as `TaskCard`. This shows how data and actions can be shared between components through props.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start

4. **Run tests:**
   ```bash
   npm test
   
