import React from "react";

export default function AddTaskForm({
  newTask,
  setNewTask,
  newDueDate,
  setNewDueDate,
  newDescription,
  setNewDescription,
  handleAddTask,
}) {
  return (
    <>
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
    </>
  );
}