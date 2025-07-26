import React, { useContext, useState, useMemo, Suspense } from "react";
import { TaskContext } from "./TaskContext";

const TaskCard = React.lazy(() => import("./TaskCard"));

export default function App() {
  const { tasks, addTask } = useContext(TaskContext);

  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask({
      id: Date.now(),
      name: newTask,
      dueDate: newDueDate,
      description: newDescription,
    });
    setNewTask("");
    setNewDueDate("");
    setNewDescription("");
  };

  const taskCards = useMemo(
    () =>
      tasks.map((task) => <TaskCard key={task.id} task={task} />),
    [tasks]
  );

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10 px-2 font-sans">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-blue-200 p-8 mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          Task Manager
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task name"
            aria-label="Task name"
            className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            aria-label="Due date"
            className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
        </div>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Description"
          aria-label="Description"
          className="w-full border border-blue-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg resize-none"
          rows={2}
        />
        <button
          onClick={handleAddTask}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors text-lg shadow"
          aria-label="Add task"
        >
          Add Task
        </button>
      </div>
      <div className="w-full max-w-xl flex flex-col gap-6">
        {tasks.length === 0 && (
          <div className="text-center text-blue-400 italic">No tasks yet</div>
        )}
        <Suspense fallback={<div>Loading tasks...</div>}>
          {taskCards}
        </Suspense>
      </div>
    </div>
  );
}