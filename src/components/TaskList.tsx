import React, { useContext } from "react";
import { TasksContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

// Обновляем тип пропса filter для строгой типизации
interface TaskListProps {
  filter: "all" | "active" | "completed"; // Строгий тип фильтра
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) return null;

  const { tasks, toggleTask, clearCompleted, getFilteredTasks } = tasksContext;

  // Используем метод getFilteredTasks для фильтрации задач
  const filteredTasks = getFilteredTasks(filter);

  return (
    <div className="task-list">
      <h2>Список задач</h2>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
      <p>Осталось задач: {tasks.filter((task) => !task.completed).length}</p>
      <button onClick={clearCompleted}>Очистить выполненные</button>
    </div>
  );
};

export default TaskList;
