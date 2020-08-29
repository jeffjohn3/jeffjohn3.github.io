import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Paper } from "@material-ui/core";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "../styles/Sample.less";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};
type MyProps = {
  file: string;
};
type MyState = {
  numPages: string;
  currentPage: number;
  leftDisable: boolean;
  rightDisable: boolean;
};

export default class Pdf extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      currentPage: 1,
      leftDisable: true,
      rightDisable: false,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onIncrement = () => {
    this.setState((prevState) => {
      const newPage = prevState.currentPage + 1;
      if (newPage > parseInt(prevState.numPages)) {
        return prevState;
      }
      if (newPage == parseInt(prevState.numPages)) {
        return {
          ...prevState,
          currentPage: newPage,
          leftDisable: false,
          rightDisable: true,
        };
      }
      return {
        ...prevState,
        currentPage: newPage,
        leftDisable: false,
        rightDisable: false,
      };
    });
  };
  onDecrement = () => {
    this.setState((prevState) => {
      const newPage = prevState.currentPage - 1;
      if (newPage < 1) {
        return prevState;
      }
      if (newPage == 1) {
        return {
          ...prevState,
          currentPage: newPage,
          rightDisable: false,
          leftDisable: true,
        };
      }
      return {
        ...prevState,
        currentPage: newPage,
        rightDisable: false,
        leftDisable: false,
      };
    });
  };

  render() {
    const { numPages } = this.state;

    return (
      <div className="Example">
        <div
          className="react-pdf__Document"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Document
            file={this.props.file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
            renderMode="svg"
            style={{}}
          >
            <Paper elevation={7} style={{ borderRadius: "15px", zIndex: 5 }}>
              <Page
                key={`page_${this.state.currentPage}`}
                pageNumber={this.state.currentPage}
                width={275}
                renderTextLayer={false}
                renderInteractiveForms={false}
                renderAnnotationLayer={false}
              />
            </Paper>
            <div className="page-controls">
              <button
                type="button"
                disabled={this.state.leftDisable}
                onClick={this.onDecrement}
              >
                {"<"}
              </button>
              <span> {this.state.currentPage + " of " + numPages} </span>
              <button
                type="button"
                disabled={this.state.rightDisable}
                onClick={this.onIncrement}
              >
                {">"}
              </button>
            </div>
          </Document>
        </div>
      </div>
    );
  }
}
