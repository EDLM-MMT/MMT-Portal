import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Table from './Table';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}));

describe('Table component', () => {
  const rowsData = [
    ['User 1', '2022-01-01', 'View', 'Reset'],
    ['User 2', '2022-02-02', 'View', 'Reset'],
  ];
  const columnTitles = ['Username', 'Last Login', '', ''];

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, container } = render(
      <Table rowsData={rowsData} columnTitles={columnTitles} />
    );
    const table = container.querySelector('table');
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');

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

  it('renders the "No data found" message when there is no data', () => {
    const { getByText } = render(<Table rowsData={[]} columnTitles={[]} />);
    expect(getByText('No data found')).toBeInTheDocument();
  });

  it('calls the handleView function when the "View" button is clicked', () => {
    const router = { push: jest.fn() };
    (useRouter as jest.MockedFunction<typeof useRouter>).mockReturnValue(
      router
    );

    const { getByText } = render(
      <Table rowsData={rowsData} columnTitles={columnTitles} />
    );
    const viewButton = getByText('View');
    fireEvent.click(viewButton);

    expect(router.push).toHaveBeenCalledWith('/programAdmin/loginHistory');
  });

});
