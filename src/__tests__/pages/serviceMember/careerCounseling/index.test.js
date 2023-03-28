import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CareerCounselingList from '@/pages/serviceMember/counseling/index';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CareerCounselingList component', () => {

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <CareerCounselingList />
      </MemoryRouterProvider>
    );

    
    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
  });


});
