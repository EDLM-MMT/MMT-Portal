import NewInquiry from "@/pages/serviceMember/newInquiry";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("New Inquiry Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('New Inquiry')).toBeInTheDocument();
    expect(getByText('Type of Issue')).toBeInTheDocument();
    expect(getByText('Type of Issues')).toBeInTheDocument();
    expect(getByText('Common Solution')).toBeInTheDocument();

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
