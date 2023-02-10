import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import AccountSupport from "../../pages/accountSupport";

describe("AccountSupport page", () => {
  it("should render the page", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
        </MemoryRouterProvider>
    );
    expect(getByText('Account Support')).toBeInTheDocument();
  });

  it("should fill the form fields", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouterProvider>
          <AccountSupport />
      </MemoryRouterProvider>
  );
    act(() => {
      fireEvent.change(getByPlaceholderText('Search here'), {
          target: { value: 'test' },
        });
    });
  });

  it("should render the table", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
        </MemoryRouterProvider>
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Reset Password')).toBeInTheDocument();
    expect(getByText('View Login History')).toBeInTheDocument();
  });
});