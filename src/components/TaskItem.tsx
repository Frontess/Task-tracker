import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)} // Переключает состояние задачи
      />
    </div>
  );
};

export default TaskItem;
