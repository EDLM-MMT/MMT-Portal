import NewInquiry from "@/pages/serviceMember/newInquiry";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('New Inquiry')).toBeInTheDocument();
    expect(getByText('My Inquiries')).toBeInTheDocument();
    expect(getByText('Inquiry Title')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Submit Inquiry')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Enter Inquiry Title'), {
            target: { value: 'test' },
          });
    });

    const button = getByText('Cancel');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("should navigate to inquiries", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('My Inquiries')).toBeInTheDocument();
    const button = getByText('My Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

});
