import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import ResetPasswordOverlay from '@/components/overlays/ResetPasswordOverlay';

describe("ResetPasswordOverlay Component", () => {

    jest.fn(() => ({
        userData: 
        { 
        role:'Service Member',
        learner:
            {personnel:
                {person:
                    { firstName: 'Test user' } 
                }
            }
        },
        setUserData: jest.fn(),
        removeUserData: jest.fn()
    }));
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <ResetPasswordOverlay toggleModal={()=>{}}
                    message={"Please confirm you want to test"}/>
            </MemoryRouterProvider> );
            
            
        expect(getByText("Reset Password Confirmation")).toBeInTheDocument();
        expect(getByText("Confirm")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();

        const button = getByText('Confirm');
        act(() => {
            fireEvent.click(button);
        });

        const button2 = getByText('Cancel');
        act(() => {
            fireEvent.click(button2);
        });
    });
});
