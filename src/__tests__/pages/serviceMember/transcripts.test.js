import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Transcripts from "@/pages/serviceMember/transcripts";

describe("Transcripts Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <Transcripts />
        </MemoryRouterProvider>
    );
    expect(getByText('My Transcripts')).toBeInTheDocument();
    expect(getByText('Request Official Transcript')).toBeInTheDocument();
    expect(getByText('Basic Transcript')).toBeInTheDocument();
    expect(getByText('Summary Transcript')).toBeInTheDocument();
    expect(getByText('Academic Transcript')).toBeInTheDocument();
    expect(getByText('Complete Enterpise Transcript')).toBeInTheDocument();
    expect(getAllByText('View').length).toBe(4);
    expect(getAllByText('Download').length).toBe(4);

  });
});
