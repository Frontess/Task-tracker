import { useState } from "react";

// Тип задачи
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Добавить новую задачу
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(), // Уникальный идентификатор
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Переключить статус выполнения задачи
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Удалить все выполненные задачи
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Получить задачи по фильтру
  const getFilteredTasks = (filter: "all" | "active" | "completed") => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks; // Общий список задач
  };

  return { tasks, addTask, toggleTask, clearCompleted, getFilteredTasks };
};

export default useTasks;
