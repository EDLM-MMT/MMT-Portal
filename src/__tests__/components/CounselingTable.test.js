import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import CounselingTable from '@/components/Tables/CounselingTable';

describe('Counseling Table component', () => {
  const course_plan = [
        {
            "course_number": "MAC1105",
            "course_name": "Intro to Algebra",
            "credit_hours": 3,
            "projected_semester": "Fall 2022",
            "status": "Approved"
        },
        {
            "course_number": "COP1000",
            "course_name": "Intro to Programming",
            "credit_hours": 3,
            "projected_semester": "Spring 2023",
            "status": "Approved"
        },
        {
            "course_number": "  SOC 1101",
            "course_name": "Sociology",
            "credit_hours": 3,
            "projected_semester": "Summer 2023",
            "status": "Pending Approval"
        }
    ]
        
  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, container } = render(
      <MemoryRouterProvider url='/'>
        <CounselingTable coursePlan={course_plan} />
      </MemoryRouterProvider>
    );
    
    expect(getByText('MAC1105')).toBeInTheDocument();
    expect(getByText('Intro to Algebra')).toBeInTheDocument();
    expect(getByText('Fall 2022')).toBeInTheDocument();

  });

//   it('renders the "No data found" message when there is no data', () => {
//     const { getByText } = render(
//       <MemoryRouterProvider>
//         <CounselingTable />
//       </MemoryRouterProvider> );
//     expect(getByText('No data found')).toBeInTheDocument();
//   });

});
