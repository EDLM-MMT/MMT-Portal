import { act, fireEvent, render } from "@testing-library/react";
import DownloadButton from "@/components/buttons/DownloadButton";

describe("Download Button Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<DownloadButton handleDownloadClick={()=>{}}/>);
    expect(getByText(/Download/i)).toBeInTheDocument();
    
    const button = getByText('Download');
    act(() => {
        fireEvent.click(button);
    });
  });

});