import InquiryView from "@/pages/serviceMember/inquiries/[inquiryId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import CareerCounseling from "@/pages/eso/careerCounseling/[careerCounselingId]";

let url = ''
let body = {}

jest.mock("axios", () => ({
  get: jest.fn((_url, _body) => { 
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  })
})) 

describe("Career Counseling View Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    expect(getByText('Career Counseling')).toBeInTheDocument();
    expect(getByText('View Transcript')).toBeInTheDocument();
    expect(getByText('School:')).toBeInTheDocument();
    expect(getByText('Degree Start Date:')).toBeInTheDocument();
    expect(getByText('Total Credit Hours:')).toBeInTheDocument();
    expect(getByText('Projected Graduation Date:')).toBeInTheDocument();
    expect(getByText('Save Changes')).toBeInTheDocument();
    expect(getByText('Add a comment:')).toBeInTheDocument();
    expect(getByText('Post')).toBeInTheDocument();
    expect(getByText('Counseling Timeline')).toBeInTheDocument();

    expect(getByPlaceholderText('Please provide comments if necessary.')).toBeInTheDocument();
    act(() => {
      fireEvent.change(getByPlaceholderText('Please provide comments if necessary.'), {
        target: { value: 'test' },
      });
    });

    const button = getByText('Post');
    act(() => {
      fireEvent.click(button);
    });

  });

  it("should navigate to Career Counseling Dashboard page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Career Counseling Dashboard')).toBeInTheDocument();
    const button = getByText('Career Counseling Dashboard');
    act(() => {
        fireEvent.click(button);
    });
  });

  it("should add course", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    const button = getByText('Add Courses');
    act(() => {
        fireEvent.click(button);
    });

    act(() => {
      fireEvent.change(getByPlaceholderText('Course Number'), {
        target: { value: 'COP1101' },
      });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Course Name'), {
        target: { value: 'Prog 1' },
      });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Credit Hours'), {
        target: { value: '3' },
      });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Projected Semester'), {
        target: { value: 'Fall 2023' },
      });
    });

    expect(getByText('Add Course')).toBeInTheDocument();
    const button2 = getByText('Add Course');
    act(() => {
        fireEvent.click(button2);
    });
  });

  it("should click Save button", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Save Changes')).toBeInTheDocument();
    const button = getByText('Save Changes');
    act(() => {
        fireEvent.click(button);
    });
  });


});
