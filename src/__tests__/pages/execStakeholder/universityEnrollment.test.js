import UniversityEnrollment from "@/pages/execStakeholder/universityEnrollment/index";
import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("State Enrollment page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <UniversityEnrollment />
        </MemoryRouterProvider>
      );

      expect(getByText('University Enrollment Statistics')).toBeInTheDocument();
      expect(getByText("Overall Statistics")).toBeInTheDocument();
      expect(getByText('Active Service Members Enrolled')).toBeInTheDocument();
      expect(getByText('Institute Statistics')).toBeInTheDocument();

    });

});
