import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ProgramAdminDashboard from "@/pages/dashboard/programAdmin/programAdminDashboard";

describe("Card Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <ProgramAdminDashboard />
        </MemoryRouterProvider>
    );
    expect(getByText('Inquiry Management')).toBeInTheDocument();
    expect(getByText('Go to Inquiries')).toBeInTheDocument();
    expect(getByText('Account Support')).toBeInTheDocument();
    expect(getByText('Go to Account Support')).toBeInTheDocument();

  });
});
