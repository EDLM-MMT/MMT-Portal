import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import DegreeAgreementsOverlay from '@/components/overlays/DegreeAgreementsOverlay';

describe("DegreeAgreementsOverlay Component", () => {

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
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"}
                    degreeIndex={"0"}/>
            </MemoryRouterProvider> );
            
        expect(getByText("test title")).toBeInTheDocument();
        expect(getByText("Yes, test")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();

        const button = getByText('Cancel');
        act(() => {
            fireEvent.click(button);
        });
        const button2 = getByText('Yes, test');
        act(() => {
            fireEvent.click(button2);
        });
    });
});
