import ESOManagementView from "@/pages/programAdmin/esoManagement/[esoManagementId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("ESO Management View page", () => {
  it("should render the page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView />
        </MemoryRouterProvider>
    );
    expect(getByText('- ESO')).toBeInTheDocument();
    expect(getByText('Permissions')).toBeInTheDocument();
    expect(getByText('Assigned Tasks')).toBeInTheDocument();
    expect(getByText('Statistics')).toBeInTheDocument();

  });

  it("should render the table", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView />
        </MemoryRouterProvider>
    );
    expect(getByText('Task ID')).toBeInTheDocument();
    expect(getByText('Service Member Name')).toBeInTheDocument();
    expect(getByText('Branch')).toBeInTheDocument();
    expect(getByText('Inquiry/Career Path')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Task Duration')).toBeInTheDocument();
  });

  it("should click the edit button", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <ESOManagementView />
        </MemoryRouterProvider>
    );

    const viewButton = getByText('Edit');
    act(() => {
      fireEvent.click(viewButton);
    });

    const saveButton = getByText('Save');
    act(() => {
      fireEvent.click(saveButton);
    });

  });

});