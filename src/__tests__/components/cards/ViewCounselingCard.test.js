import ViewCounselingCard from "@/components/cards/ViewCounselingCard";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ViewCard from '../../../components/cards/InquiryViewCard';

describe("View Counseling Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <ViewCounselingCard title={"Counseling Card"}/>
      </MemoryRouterProvider>
    );

    expect(getByText(/Overview/i)).toBeInTheDocument();
  });

});
