import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ProgramAdminViewCard from '../../../components/cards/ProgAdminViewCard';

describe("View Card component", () => {

  const mockData = [{
    id:"600",
    name: "John Smith",
    username: "jsmith",
    role: "Service Member",
    status: "Active",
    resetPassword: "Reset",
    viewHistory: "View",
    passwordTimestamp: "1/21/2023 1:43:20 PM"
  }]

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <ProgramAdminViewCard account={mockData} routePath={mockData.id} />
      </MemoryRouterProvider>
    );

    expect(getByText("Overview")).toBeInTheDocument();
    expect(getByText("Status:")).toBeInTheDocument();
    expect(getByText("Password:")).toBeInTheDocument();

    const editButton = getByText('Edit');
    act(() => {
        fireEvent.click(editButton);
    });

    const saveButton = getByText('Save Changes');
    act(() => {
        fireEvent.click(saveButton);
    });
    // const resetButton = getByText('Password Reset');
    // act(() => {
    //   fireEvent.click(resetButton);
    // });


  });

});
