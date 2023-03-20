import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import CounselingEditableCard from '../../../components/cards/CounselingEditableCard';

describe("Edit Card component", () => {

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
        <CounselingEditableCard career={mockData} routePath={mockData.id} />
      </MemoryRouterProvider>
    );

    expect(getByText("Details")).toBeInTheDocument();
    expect(getByText("Assigned ESO:")).toBeInTheDocument();
    expect(getByText("Projected Graduation Date:")).toBeInTheDocument();

    const editButton = getByText('Edit');
    act(() => {
        fireEvent.click(editButton);
    });

    const saveButton = getByText('Save Changes');
    act(() => {
        fireEvent.click(saveButton);
    });


  });

});
