import Dropdown from "@/components/dropdowns/Dropdown";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


describe("Dropdown component", () => {

    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <Dropdown options={["School", "Major", "MOS Code"]} initialValue={"School"}/>
        </MemoryRouterProvider>
      );

      expect(getByText(/School/i)).toBeInTheDocument();

    });
});
