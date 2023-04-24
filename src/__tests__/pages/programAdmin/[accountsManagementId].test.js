import AccountsManagementId from "@/pages/programAdmin/accountsManagement/[accountsManagementId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from "@/__mocks__/axios";



describe(" Management View page", () => {
    it("should render the page", () => {
      const { getByText } = render(
          <MemoryRouterProvider>
              <AccountsManagementId />
          </MemoryRouterProvider>
      );
      expect(getByText('Login History')).toBeInTheDocument();
  
    });
    
  });