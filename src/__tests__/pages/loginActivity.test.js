import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginActivity from "@/pages/loginActivity";

describe("Login Activity Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <LoginActivity />
        </MemoryRouterProvider>
    );

    expect(getByText('Login Activity')).toBeInTheDocument();
    expect(getByText('Login date')).toBeInTheDocument();
    expect(getByText('Trascripts')).toBeInTheDocument();
    expect(getByText('Inquiries')).toBeInTheDocument();
    expect(getByText('Degree Agreements')).toBeInTheDocument();
    expect(getByText('Degree Pathways')).toBeInTheDocument();
    expect(getByText('Quick Links')).toBeInTheDocument();

  });

});
