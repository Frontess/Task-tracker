import React, { useState, useContext } from "react";
import { TasksContext } from "../context/TaskContext";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const tasksContext = useContext(TasksContext);

  if (!tasksContext) return null;

  const { addTask } = tasksContext;

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask(); // Добавляем задачу при нажатии Enter
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown} // Обработчик нажатия Enter
        placeholder="Добавьте задачу"
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default AddTask;

// import React, { useState } from "react";
// import { TasksContext } from "../context/TaskContext";

// const AddTask: React.FC = () => {
//   const { addTask } = TasksContext();
//   const [text, setText] = useState("");

//   const handleAddTask = () => {
//     if (text.trim()) {
//       addTask(text);
//       setText(""); // Очистить поле ввода
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleAddTask(); // Добавляем задачу при нажатии Enter
//     }
//   };

//   return (
//     <div className="add-task">
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onKeyDown={handleKeyDown} // Обработчик нажатия Enter
//         placeholder="Добавить задачу..."
//       />
//       <button onClick={handleAddTask}>Добавить</button>
//     </div>
//   );
// };

// export default AddTask;
