import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounselingDashboardTable from '@/components/tables/CounselingDashboardTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CounselingDashboardTable component', () => {
  const rowsData = [['Computer Science', 'Berkeley College - Online (NJ)', '60', '48', 'Go To Career Counseling', 'Delete'],];
  const columnTitles = ['Major', 'School', 'Required Hours', 'Hours Still Needed', 'Career Counseling', 'Delete'];

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, container } = render(
      <MemoryRouterProvider url='/'>
        <CounselingDashboardTable rowsData={rowsData} columnTitles={columnTitles} />
      </MemoryRouterProvider>
    );
    const table = container.querySelector('table');
    const tableHead = table.querySelector('thead');

    expect(table).toBeInTheDocument();
    expect(tableHead.childNodes.length).toBe(1);
    expect(tableHead.childNodes[0].childNodes.length).toBe(
      columnTitles.length
    );
    expect(tableBody.childNodes.length).toBe(rowsData.length);
    expect(tableBody.childNodes[0].childNodes.length).toBe(
      columnTitles.length
    );
    rowsData.forEach((row) => {
      row.forEach((data) => {
        expect(getByText(data)).toBeInTheDocument();
      });
    });
  });


});
