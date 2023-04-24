import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from 'jest-mock-axios';
import DegreeAgreements from "@/pages/serviceMember/degreeAgreements";

describe("Degree Agreements Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreeAgreements />
        </MemoryRouterProvider>
    );

    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: []}));

    expect(getByText('My Degree Agreements')).toBeInTheDocument();
    expect(getByText('Start New Degree Agreement')).toBeInTheDocument();

    const button = getByText('Start New Degree Agreement');
    act(() => {
        fireEvent.click(button);
    });

  });

});
