import NewInquiry from "@/pages/serviceMember/newInquiry";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
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

describe("New Inquiry Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: "data"}); 

    expect(getByText('New Inquiry')).toBeInTheDocument();
    expect(getByText('Type of Issue')).toBeInTheDocument();
    expect(getByText('Type of Issues')).toBeInTheDocument();
    expect(getByText('Common Solution')).toBeInTheDocument();

  });

  it("should navigate to inquiries", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('My Inquiries')).toBeInTheDocument();
    const button = getByText('My Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("should change dropdown", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('Type of Issues')).toBeInTheDocument();
    const button = getByText('Type of Issues');
    act(() => {
        fireEvent.click(button);
    });

    const button1 = getByText('Academic Institution Courses');
    act(() => {
        fireEvent.click(button1);
    });

  });

  it("should click need assistance button", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('I still need asssitance')).toBeInTheDocument();
    const button = getByText('I still need asssitance');
    act(() => {
        fireEvent.click(button);
    });

  });


  it("axios error", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });

});
