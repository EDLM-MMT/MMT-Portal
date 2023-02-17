import DegreePathways from "@/pages/serviceMember/degreePathways";
import Inquiry from "@/pages/serviceMember/inquiries";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Degree Pathways Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );


    expect(getByText('Degree Pathways Catalog')).toBeInTheDocument();
    expect(getByText('Sort By:')).toBeInTheDocument();
    expect(getByText('School')).toBeInTheDocument();
    expect(getByText('City University')).toBeInTheDocument();
    expect(getByText('Emory Riddle')).toBeInTheDocument();

    let button = getByText('City University');
    act(() => {
        fireEvent.click(button);
    });
    
    let button2 = getByText('School');
    act(() => {
        fireEvent.click(button2);
    });

    button = getByText('Major');
    act(() => {
        fireEvent.click(button);
    });

    button2 = getByText('Major');
    act(() => {
        fireEvent.click(button2);
    });

  });

});
