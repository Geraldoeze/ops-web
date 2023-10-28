import React, { useRef } from "react";
import "./App.css";
import Contents from "./components/Contents";
import LoadingSpinner from "./components/LoadingSpinner";
import Result from "./components/Result";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import PDFDocument from "./components/PdfTest";

function App() {
  const pdfRef = useRef();

  return (
    <div>
      {/* <Contents /> */}
      {/* <LoadingSpinner /> */}
      {/* <Result /> */}
      <div>
        <PDFViewer width="100%" height={500}>
          <PDFDocument />
        </PDFViewer>
        <PDFDownloadLink
        document={<PDFDocument />}
        fileName="your-document.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
