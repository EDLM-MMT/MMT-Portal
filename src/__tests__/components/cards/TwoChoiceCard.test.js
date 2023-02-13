import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TwoChoiceCard from '../../../components/cards/TwoChoiceCard';

describe('TwoChoiceCard', () => {
  it('renders title and description', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description'
    };

    const { getByText } = render(<TwoChoiceCard card={card} title={card.title} description={card.description} firstRoutePath={"/"} viewRoutePath={"/"} />);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('opens modal on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Assign Inquiry'
    };

    const { getByText, queryByText } = render(<TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Assign Inquiry"}/>);
    expect(queryByText('Please confirm you want to Test Status')).toBeNull();

    fireEvent.click(getByText('Assign Inquiry'));
  });
});
