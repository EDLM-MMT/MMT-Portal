import TranscriptView from "@/pages/eso/careerCounseling/transcript";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView />
        </MemoryRouterProvider>
    );

    expect(getByText('Complete Transcript')).toBeInTheDocument();
    expect(getByText('Career Counseling Dashboard')).toBeInTheDocument();
    expect(getByText('Return to Career Counseling Dashboard')).toBeInTheDocument();
    expect(getByText('Download')).toBeInTheDocument();

    const button = getByText('Career Counseling Dashboard');
    act(() => {
        fireEvent.click(button);
    });

  });
});
