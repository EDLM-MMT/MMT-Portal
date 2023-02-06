import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import TwoChoiceCard from "../../../components/cards/TwoChoiceCard";

describe("Two Choice Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <TwoChoiceCard />
      </MemoryRouterProvider>
    );

    expect(getByText(/My Degree Agreements/i)).toBeInTheDocument();
  });

});
