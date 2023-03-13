import AccountsManagement from "@/pages/programAdmin/accountsManagement";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("AccountSupport page", () => {
  it("should render the page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
          <AccountsManagement />
        </MemoryRouterProvider>
    );
    expect(getByText('Accounts Management')).toBeInTheDocument();
  });

  it("should fill the form fields", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouterProvider>
          <AccountsManagement />
      </MemoryRouterProvider>
  );
    act(() => {
      fireEvent.change(getByPlaceholderText('Search here'), {
          target: { value: 'test' },
        });
    });
  });

  it("should render the table", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <AccountsManagement />
        </MemoryRouterProvider>
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('View Profile')).toBeInTheDocument();
  });

  it("should click the view button", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <AccountsManagement />
        </MemoryRouterProvider>
    );

    act(() => {
      fireEvent.change(getByPlaceholderText('Search here'), {
          target: { value: 'jsmith' },
        });
    });

    const viewButton = getByText('View');
    act(() => {
      fireEvent.click(viewButton);
    });
  });

});