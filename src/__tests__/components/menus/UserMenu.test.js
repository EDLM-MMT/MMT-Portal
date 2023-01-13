import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import UserMenu from '@/components/menus/UserMenu';

describe("User Menu Component", () => {

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
                <UserMenu/>
            </MemoryRouterProvider> );

        // const button = getByText('Test user');
        // act(() => {
        //     fireEvent.click(button);
        // });
    });
});
