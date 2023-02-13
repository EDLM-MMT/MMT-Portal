import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ProgramAdminDashboard from "@/pages/dashboard/programAdmin/programAdminDashboard";

describe("Program Admin Dashbaord Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ProgramAdminDashboard />
        </MemoryRouterProvider>
    );
    expect(getByText('Inquiry Management')).toBeInTheDocument();
    expect(getByText('Go to Inquiry Management')).toBeInTheDocument();
    expect(getByText('Account Support')).toBeInTheDocument();
    expect(getByText('Go to Account Support')).toBeInTheDocument();

  });
});
