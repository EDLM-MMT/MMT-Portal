import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
      <TwoChoiceCard card={card} title={card.title} description={card.description} firstRoutePath={"/"} viewRoutePath={"/"} />
    </MemoryRouterProvider>);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('opens modal on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Assign Inquiry',
      secondRoutePath:"/"
    };

    const { getByText, queryByText } = render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Assign Inquiry"}/>
    </MemoryRouterProvider>);
    expect(queryByText('Please confirm you want to Test Status')).toBeNull();

    fireEvent.click(getByText('Assign Inquiry'));
  });
});
