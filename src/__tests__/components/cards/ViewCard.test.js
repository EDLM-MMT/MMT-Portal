import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ViewCard from '../../../components/cards/InquiryViewCard';

describe("View Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <ViewCard title={"My Degree Agreements"}/>
      </MemoryRouterProvider>
    );

    expect(getByText(/My Degree Agreements/i)).toBeInTheDocument();
  });

});
