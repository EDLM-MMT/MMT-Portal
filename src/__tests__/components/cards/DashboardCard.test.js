import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DashboardCard from "@/components/cards/DashboardCard";

describe("Dashbaord Card Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DashboardCard title={"Test title"} buttonLabel={"Button"} routePath={"/"}/>
        </MemoryRouterProvider>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();

    const button = getByText('Button');
    act(() => {
        fireEvent.click(button);
    });

  });
});