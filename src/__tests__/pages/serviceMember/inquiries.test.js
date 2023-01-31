import Inquiry from "@/pages/serviceMember/inquiries";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from 'jest-mock-axios';

describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <Inquiry />
        </MemoryRouterProvider>
    );

    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: []}));

    expect(getByText('My Inquiries')).toBeInTheDocument();
    expect(getByText('Start New Inquiry')).toBeInTheDocument();

    const button = getByText('Start New Inquiry');
    act(() => {
        fireEvent.click(button);
    });

  });

});
