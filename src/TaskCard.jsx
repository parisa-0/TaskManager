import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-white border-l-8 border-blue-500 rounded-lg shadow flex flex-col px-6 py-4">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700 mb-1 text-center">
          {task.name}
        </h2>
        <div className="text-blue-500 mb-1 text-center text-sm font-medium">
          {task.dueDate ? `Due: ${task.dueDate}` : "No due date"}
        </div>
        <div className="text-gray-700 text-center">{task.description}</div>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold self-center"
        aria-label={`Delete ${task.name}`}
      >
        Delete
      </button>
    </div>
  );
}