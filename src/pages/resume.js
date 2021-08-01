import React from "react";
import Layout from "./../components/Layout";
import { PDFObject } from "react-pdfobject";

export default function Resume() {
  return (
    <Layout>
      {/* <PDFObject url={"/rounakvyas.pdf"} height="700px" /> */}
      <PDFObject
        url={
          "https://drive.google.com/file/d/163ioE5I76fiyeaqs-3zHQs0l8pA6Fdd1/view"
        }
        height="700px"
      />
    </Layout>
  );
}
