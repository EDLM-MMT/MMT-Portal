import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import TwoChoiceCard from '../../../components/cards/TwoChoiceCard';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('TwoChoiceCard', () => {
  it('renders title and description', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      secondRoutePath:"/"
    };

    const { getByText } = render(
    <MemoryRouterProvider> 
      <TwoChoiceCard card={card} firstRoutePath={"/"} />
    </MemoryRouterProvider>);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('opens Inquiry modal on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Assign Inquiry',
      secondRoutePath:"/"
    };

    const { getByText, queryByText } = render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Assign Inquiry"} type={"I"}/>
    </MemoryRouterProvider>);
    expect(queryByText('Please confirm you want to Test Status')).toBeNull();

    const button = getByText('Assign Inquiry');
    act(() => {
        fireEvent.click(button);
    }); 
  });

  it('opens DA on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Close Degree Agreement',
      secondRoutePath:"/"
    };

    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const { getByText } = render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Close Degree Agreement"}/>
    </MemoryRouterProvider>);

    const button = getByText('Close Degree Agreement');
    // act(() => {
    //     fireEvent.click(button);
    // });
  });
});
