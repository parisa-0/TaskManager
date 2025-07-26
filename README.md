# React Task Manager

A simple, modern task manager built with React and Tailwind CSS.

## Features

- Add, view, and delete tasks
- Each task includes a name, due date, and description
- Responsive, clean UI with Tailwind CSS
- Tasks are saved in your browser’s local storage
- Tested with React Testing Library
- Uses React Context API for global state management

## React Concepts Used

### React Hooks

This app uses React hooks such as:
- `useState` for managing form inputs
- `useEffect` for syncing tasks with local storage
- `useContext` to consume the global task state provided by Context API
- `useMemo` to memoize the list of task cards for performance optimization

### State Management with Context API

State is managed globally using React’s **Context API** with a `TaskContext` provider. This allows sharing tasks and related functions (add, delete) across components without prop drilling.

### Code Splitting and Lazy Loading

The app uses `React.lazy` and `Suspense` to lazily load components like `TaskCard` and `AddTaskForm`, improving initial load performance by splitting code.

### Error Handling

An **Error Boundary** component is implemented to catch and display errors gracefully in the UI, preventing the entire app from crashing.

### Memoization

`useMemo` is used to optimize rendering performance by memoizing the list of task cards, so they only re-render when the tasks actually change.

### Prop Drilling

The app minimizes prop drilling by using Context API, but still demonstrates passing some props like task data and handlers to child components.

### Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/parisa-0/TaskManager
   cd TaskManager


2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start

4. **Run tests:**
   ```bash
   npm test