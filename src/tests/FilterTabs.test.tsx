import { render, screen, fireEvent } from "@testing-library/react";
import FilterTabs from "../components/FilterTabs";
import "@testing-library/jest-dom";

test("переключение фильтров задач", () => {
  const mockSetFilter = jest.fn();

  render(<FilterTabs setFilter={mockSetFilter} />);

  const allTab = screen.getByText("Все");
  const activeTab = screen.getByText("Невыполненные");
  const completedTab = screen.getByText("Выполненные");

  fireEvent.click(activeTab);
  expect(mockSetFilter).toHaveBeenCalledWith("active");

  fireEvent.click(completedTab);
  expect(mockSetFilter).toHaveBeenCalledWith("completed");

  fireEvent.click(allTab);
  expect(mockSetFilter).toHaveBeenCalledWith("all");
});
