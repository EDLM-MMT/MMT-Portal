import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from 'jest-mock-axios';
import Credits from "@/pages/serviceMember/credits/index";

describe("Credits Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <Credits />
        </MemoryRouterProvider>
    );

    // mockAxios.get.mockImplementation(() => Promise.resolve({ data: []}));

    expect(getByText('Credits Translation Page')).toBeInTheDocument();
    expect(getByText('Credits')).toBeInTheDocument();

    const button = getByText('Degree Pathways Catalog');
    act(() => {
        fireEvent.click(button);
    });

  });

});
