import InquiryView from "@/pages/serviceMember/viewInquiry/[inquiryId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import MockAxios from 'jest-mock-axios';
import axios from 'axios'

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

describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <InquiryView />
        </MemoryRouterProvider>
    );

    expect(getByText('View Inquiry')).toBeInTheDocument();
    expect(getByText('My Inquiries')).toBeInTheDocument();
    expect(getByText('Submitted on')).toBeInTheDocument();
    expect(getByText('Add a comment:')).toBeInTheDocument();
    expect(getByText('Post')).toBeInTheDocument();
    expect(getByText('Inquiry Timeline')).toBeInTheDocument();

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

  it("should navigate to inquiries", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <InquiryView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('My Inquiries')).toBeInTheDocument();
   
    const button = getByText('My Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

});
