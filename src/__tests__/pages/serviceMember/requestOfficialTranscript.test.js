import RequestOfficialTranscript from "@/pages/serviceMember/requestOfficialTranscript";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Request Transcript Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <RequestOfficialTranscript />
        </MemoryRouterProvider>
    );

    expect(getByText('Official Transcript')).toBeInTheDocument();
    expect(getByText('Transcript')).toBeInTheDocument();
    expect(getByText('Enter Academic Institute')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Send Transcript')).toBeInTheDocument();

    const button = getByText('Transcript');
    act(() => {
        fireEvent.click(button);
    });

  });
});
