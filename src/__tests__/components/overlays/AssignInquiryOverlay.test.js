import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import AssignInquiryOverlay from "../../../components/overlays/AssignInquiryOverlay";

describe("Assign Inquiry Overlay component", () => {

    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <AssignInquiryOverlay />
        </MemoryRouterProvider>
      );

      expect(getByText(/Assign Inquiry/i)).toBeInTheDocument();
      expect(getByText(/Choose Assignee:/i)).toBeInTheDocument();
      expect(getByText(/Cancel/i)).toBeInTheDocument();
      expect(getByText(/Save/i)).toBeInTheDocument();
    });
});
