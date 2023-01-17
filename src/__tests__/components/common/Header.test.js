import Header from '@/components/common/Header';
import useStore from '@/store/store';
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';

describe('Header', () => {
    jest.mock('@/store/store', () =>
    jest.fn(() => ({
        userData: 
        { 
        role:'Service Member',
        learner:
            {personnel:
            {person:
                { name: 'Test user' } 
            }
            }
        },
        setUserData: jest.fn(),
        removeUserData: jest.fn()
        }))
    );

    it('should show the header text', () => {
        const { getByText } = render( <MemoryRouterProvider>
            <Header />
            </MemoryRouterProvider>);

        expect(getByText('Sign up')).toBeInTheDocument();

        const button = getByText('Sign up');
        act(() => {
            fireEvent.click(button);
        });
      });

});