import React, { useContext, useState, useMemo, Suspense } from "react";
import { TaskContext } from "./TaskContext";

const TaskCard = React.lazy(() => import("./TaskCard"));
const AddTaskForm = React.lazy(() => import("./AddTaskForm"));

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

  // Memoize the list of TaskCards
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
        <Suspense fallback={<div>Loading form...</div>}>
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            newDueDate={newDueDate}
            setNewDueDate={setNewDueDate}
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            handleAddTask={handleAddTask}
          />
        </Suspense>
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