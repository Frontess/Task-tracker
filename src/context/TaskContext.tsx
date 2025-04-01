import React, { createContext, useState, ReactNode } from "react";
import { Task } from "../types";

interface TasksContextProps {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  clearCompleted: () => void;
  getFilteredTasks: (filter: "all" | "active" | "completed") => Task[];
}

export const TasksContext = createContext<TasksContextProps | undefined>(
  undefined
);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Функция для добавления задачи
  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Функция для переключения статуса выполнения задачи
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Функция для удаления всех выполненных задач
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Функция для получения отфильтрованных задач
  const getFilteredTasks = (filter: "all" | "active" | "completed") => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks; // Общий список задач
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, toggleTask, clearCompleted, getFilteredTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};
