import AccountSupport from "@/pages/programAdmin/accountSupport";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("AccountSupport page", () => {
  it("should render the page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
        </MemoryRouterProvider>
    );
    expect(getByText('Account Support')).toBeInTheDocument();
  });

  it("should fill the form fields", () => {
    const { getByPlaceholderText } = render(
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
    const { getByText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
        </MemoryRouterProvider>
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Reset Password')).toBeInTheDocument();
    expect(getByText('View Login History')).toBeInTheDocument();
  });

  it("should click the view button", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
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

  it("should click the reset button", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <AccountSupport />
        </MemoryRouterProvider>
    );

    act(() => {
      fireEvent.change(getByPlaceholderText('Search here'), {
          target: { value: 'John' },
        });
    });

    const resetButton = getByText('Reset');
    act(() => {
      fireEvent.click(resetButton);
    });
  });

});