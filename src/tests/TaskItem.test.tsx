import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";

test("переключение статуса задачи", () => {
  const mockToggleTask = jest.fn();
  const task = { id: 1, text: "Test Task", completed: false };

  const { getByText, getByRole } = render(
    <TaskItem task={task} toggleTask={mockToggleTask} />
  );

  const taskText = getByText("Test Task");
  fireEvent.click(taskText);

  const checkbox = getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(mockToggleTask).toHaveBeenCalledWith(1); // Проверка вызова
});
