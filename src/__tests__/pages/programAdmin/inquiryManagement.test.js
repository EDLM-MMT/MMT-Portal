import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from 'jest-mock-axios';
import InquiryManagement from "@/pages/programAdmin/inquiryManagement";

describe("Inquiries Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <InquiryManagement />
        </MemoryRouterProvider>
    );

    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: []}));

    expect(getByText('Inquiry Management')).toBeInTheDocument();

  });

});
