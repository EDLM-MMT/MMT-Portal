import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import QuickLinks from "@/pages/quickLinks";

describe("Transcript Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <QuickLinks />
        </MemoryRouterProvider>
    );
    expect(getByText('FAQs and Quick Links')).toBeInTheDocument();
    expect(getByText('FAQs')).toBeInTheDocument();
    expect(getByText('Quick Links')).toBeInTheDocument();

    const button = getByText('How do I participate?');
    act(() => {
        fireEvent.click(button);
    });

  });
});
