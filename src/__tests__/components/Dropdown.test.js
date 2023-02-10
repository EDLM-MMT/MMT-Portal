import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Dropdown from "../../components/Dropdown";

describe("Dropdown component", () => {

    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <Dropdown />
        </MemoryRouterProvider>
      );

      expect(getByText(/BA Applied Psychology/i)).toBeInTheDocument();

    });
});
