import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CareerCounseling from '@/pages/eso/careerCounseling/index';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CareerCounseling component', () => {

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <CareerCounseling />
      </MemoryRouterProvider>
    );
    
    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
  });

});
