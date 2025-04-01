import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTask from "../components/AddTask";
import { TasksProvider } from "../context/TaskContext";

test("добавление новой задачи", () => {
  render(
    <TasksProvider>
      <AddTask />
    </TasksProvider>
  );

  const input = screen.getByPlaceholderText("Добавьте задачу");
  const button = screen.getByText("Добавить");

  fireEvent.change(input, { target: { value: "Новая задача" } });
  fireEvent.click(button);

  expect(input).toHaveValue("");
});
