import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ResetPassword from "../../pages/resetPassword";

describe("Reset password page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );

      expect(getByText(/Reset Password/i)).toBeInTheDocument();
    });

    it("should change the text in the form field", () => {
      const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );

      act(() => {
        fireEvent.change(getByPlaceholderText('password'), {
            target: { value: 'test' },
          });
      });

      act(() => {
        fireEvent.change(getByPlaceholderText('confirm password'), {
            target: { value: 'test' },
          });
      });

    });

    it("should click the button", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );
  
      const cancelButton = getByText('Cancel');
      act(() => {
          fireEvent.click(cancelButton);
      });

      const UpdateButton = getByText('Update Password');
      act(() => {
          fireEvent.click(UpdateButton);
      });
    });

});