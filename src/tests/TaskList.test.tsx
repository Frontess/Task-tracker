import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TasksProvider } from "../context/TaskContext";
import "@testing-library/jest-dom";

test("отображение задач по фильтру", () => {
  render(
    <TasksProvider>
      <TaskList filter="all" />
    </TasksProvider>
  );

  const header = screen.getByText("Список задач");
  expect(header).toBeInTheDocument();
});
