import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


const addTask = (name = "New Task", dueDate = "2025-07-26", description = "Description") => {
  fireEvent.change(screen.getByPlaceholderText(/task name/i), { target: { value: name } });
  fireEvent.change(screen.getByLabelText(/due date/i), { target: { value: dueDate } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: description } });
  fireEvent.click(screen.getByRole("button", { name: /add task/i }));
};

describe("App", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders the Task Manager title", () => {
    render(<App />);
    expect(screen.getByText(/task manager/i)).toBeInTheDocument();
  });

  it("shows 'No tasks yet' when there are no tasks", () => {
    render(<App />);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });

  it("can add a new task", () => {
    render(<App />);
    addTask("My Task", "2025-07-26", "My Description");
    expect(screen.getByText("My Task")).toBeInTheDocument();
    expect(screen.getByText("Due: 2025-07-26")).toBeInTheDocument();
    expect(screen.getByText("My Description")).toBeInTheDocument();
  });

  it("can delete a task", () => {
    render(<App />);
    addTask("Task to Delete", "2025-07-26", "Delete me");
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
  });

  it("does not add a task with empty name", () => {
    render(<App />);
    addTask("", "2025-07-26", "No name");
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });
});