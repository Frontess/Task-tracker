// import React, { useState } from "react";
// import { TasksProvider } from "./context/TaskContext";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList";
// import FilterTabs from "./components/FilterTabs";

// const App = () => {
//   const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

//   return (
//     <TasksProvider>
//       <div className="app-container">
//         <h1>ToDo List</h1>
//         <AddTask />
//         <FilterTabs setFilter={setFilter} />
//         <TaskList filter={filter} />
//       </div>
//     </TasksProvider>
//   );
// };

// export default App;
import React, { useState } from "react";
import { TasksProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import WelcomeScreen from "./components/WelcomeScreen"; // Импортируем компонент WelcomeScreen

const App = () => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [showWelcome, setShowWelcome] = useState(true); // Состояние для отображения приветственного экрана

  const handleAnimationEnd = () => {
    setShowWelcome(false); // Скрываем экран после анимации
  };

  return (
    <TasksProvider>
      {showWelcome ? (
        <WelcomeScreen onAnimationEnd={handleAnimationEnd} /> // Приветственный экран
      ) : (
        <div className="app-container">
          <h1>ToDo List</h1>
          <AddTask />
          <FilterTabs setFilter={setFilter} />
          <TaskList filter={filter} />
        </div>
      )}
    </TasksProvider>
  );
};

export default App;
