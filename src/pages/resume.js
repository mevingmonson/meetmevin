import React from "react";
import Layout from "./../components/Layout";
import { PDFObject } from "react-pdfobject";

export default function Resume() {
  return (
    <Layout>
      {/* <PDFObject url={"/rounakvyas.pdf"} height="700px" /> */}
      <PDFObject url={"/Mevin_G_Monson_Resume.pdf"} height="700px" />
    </Layout>
  );
}
