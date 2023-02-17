import InquiryView from "@/pages/serviceMember/inquiries/[inquiryId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import CareerCounseling from "@/pages/serviceMember/careerCounseling/[careerCounselingId]";

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
    expect(getByText('Career Counseling Dashboard')).toBeInTheDocument();
    expect(getByText('School:')).toBeInTheDocument();
    expect(getByText('Assigned ESO:')).toBeInTheDocument();
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

});
