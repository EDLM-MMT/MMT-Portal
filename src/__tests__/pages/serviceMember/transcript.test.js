import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Transcript from "@/pages/serviceMember/transcript";

describe("Transcript Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <Transcript />
        </MemoryRouterProvider>
    );
    expect(getByText('My Transcripts')).toBeInTheDocument();
    expect(getAllByText('Request Official Transcript').length).toBe(4);
    expect(getByText('Basic Transcript')).toBeInTheDocument();
    expect(getByText('Academic Transcript')).toBeInTheDocument();
    expect(getAllByText('Return to Transcript Page').length).toBe(3);
    expect(getAllByText('Download').length).toBe(3);
    
  });
});
