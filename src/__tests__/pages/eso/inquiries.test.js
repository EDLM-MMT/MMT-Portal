import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ESOInquiryDashboard from "@/pages/eso/inquiries";

describe("Inquiries Page", () => {

  const data = {
    "inquiries": [
      {
          "id": 300,
          "title": "Leadership Course",
          "description": "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. ",
          "status": "Close Inquiry",
          "inquiry_status": "Open",
          "firstRoutePath": "transcripts/basicTranscript",
          "secondRoutePath": "inquiries/300",
          "timestampCreated": "1/21/2023 1:43:20 PM",
          "submitted_by": "Bill Phillips",
          "inquiryComments": [
              {
                  "author": "John Doe",
                  "title": "ESO",
                  "comment": "Please provide more information to better assist you on our end",
                  "timestamp": "1/24/2023 2:43:20 PM"
              },
              {
                  "author": "Bill Phillips",
                  "title": "",
                  "comment": "Can I please get an ETA on when this can be resolved?",
                  "timestamp": "1/24/2023 2:43:19 PM"
              }
          ]
      }
    ]
  }
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOInquiryDashboard />
        </MemoryRouterProvider>
    );

    mockAxios.get.mockImplementation(() => Promise.resolve({ data: data}));

    expect(getByText('All Inquiries')).toBeInTheDocument();


  });

});
