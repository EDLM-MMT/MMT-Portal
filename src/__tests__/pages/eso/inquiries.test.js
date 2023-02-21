import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ESOInquiryDashboard from "@/pages/eso/inquiries";

describe("Inquiries Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOInquiryDashboard />
        </MemoryRouterProvider>
    );

    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: []}));

    expect(getByText('All Inquiries')).toBeInTheDocument();


  });

});
