import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import StatsMenu from '@/components/menus/StatsMenu';

describe("Stats Menu Component", () => {

    jest.mock('@/store/store', () =>
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
        }))
    );

    it("should render the component", () => {
        const { getByText, getByTestId } = render(
            <MemoryRouterProvider>
                <StatsMenu/>
            </MemoryRouterProvider> );

        expect(getByTestId('stats-menu-button')).toBeInTheDocument();
        
        const button = getByTestId('stats-menu-button');
        act(() => {
            fireEvent.click(button);
        });
        
        // expect(getByText('Profile')).toBeInTheDocument();
        // const button2 = getByText('Profile');
        // act(() => {
        //     fireEvent.click(button);
        // });
    });
    
});
