import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import ESOCounselingDashboardTable from '@/components/tables/ESOCounselingDashboardTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('ESOCounselingDashboardTable component', () => {
  const careerArray = [
    {
      "id": 200,
      "name": "John Smith",
      "mos_code": "AET",
      "career_counseling": [{
          "id": 300,
          "major": "Computer Science"
      }]
    },
    {
        "id": 201,
        "name": "Zach Blanchard",
        "mos_code": "ET",
        "career_counseling": [{
            "id": 301,
            "major": "Business Administration"
        }]
    },
    {
        "id": 202,
        "name": "Aimee Wallis",
        "mos_code": "DC",
        "career_counseling": [{
            "id": 302,
            "major": "Data Scientist"
        },
        {
            "id": 300,
            "major": "Computer Science"
        },
        {
            "id": 303,
            "major": "Software Engineer"
        }]
    },
  ]

  const careerArrayOne = [
    {
      "id": 200,
      "name": "John Smith",
      "mos_code": "AET",
      "career_counseling": [{
          "id": 300,
          "major": "Computer Science"
      }]
    },
  ]
      

  it('renders the component with the correct number of rows and columns', () => {
  const { getByText } = render(
    <MemoryRouterProvider url='/'>
      <ESOCounselingDashboardTable careerArray={careerArray} />
    </MemoryRouterProvider>
  );

  expect(getByText('Name')).toBeInTheDocument();
  expect(getByText('MOS Code')).toBeInTheDocument();
  expect(getByText('Counseling')).toBeInTheDocument();
  expect(getByText('Unofficial Transscript')).toBeInTheDocument();

  });

  it('clicks counseling button', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <ESOCounselingDashboardTable careerArray={careerArrayOne} />
      </MemoryRouterProvider>
    );
  
    const viewBtn = getByText('View');
      act(() => {
        fireEvent.click(viewBtn);
      });

  });

  it('clicks delete', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <ESOCounselingDashboardTable careerArray={careerArrayOne} />
      </MemoryRouterProvider>
    );

    const viewBtn = getByText('Computer Science');
      act(() => {
        fireEvent.click(viewBtn);
      });
  });

  it('searches in search bar by name', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouterProvider url='/'>
        <ESOCounselingDashboardTable careerArray={careerArray} />
      </MemoryRouterProvider>
    );

    expect(getByPlaceholderText('Search Service Member Name')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Search Service Member Name'), {
            target: { value: 'John' },
        });
    });

  });

  it('searches in search bar by MOS code', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouterProvider url='/'>
        <ESOCounselingDashboardTable careerArray={careerArray} />
      </MemoryRouterProvider>
    );

    expect(getByPlaceholderText('Search Service Member Name')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Search Service Member Name'), {
            target: { value: 'AET' },
        });
    });

  });

  it('changes sort by to student name', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <ESOCounselingDashboardTable careerArray={careerArray} />
      </MemoryRouterProvider>
    );

    const btn = getByText('Most Recent');
      act(() => {
        fireEvent.click(btn);
      });
    const btn1 = getByText('Student Name');
      act(() => {
        fireEvent.click(btn);
      });
  });

});
