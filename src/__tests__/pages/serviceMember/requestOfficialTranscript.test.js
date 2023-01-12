import RequestOfficialTranscript from "@/pages/serviceMember/requestOfficialTranscript";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Transcripts Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <RequestOfficialTranscript />
        </MemoryRouterProvider>
    );

    expect(getByText('Request Official Transcript')).toBeInTheDocument();
    expect(getByText('Transcript')).toBeInTheDocument();
    expect(getByText('First name')).toBeInTheDocument();
    expect(getByText('Last name')).toBeInTheDocument();
    expect(getByText('Academic Institute Sender')).toBeInTheDocument();
    expect(getByText('Academic Institute Recipient')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Submit Official Transcript Request')).toBeInTheDocument();

    const button = getByText('Transcript');
    act(() => {
        fireEvent.click(button);
    });

  });
});
