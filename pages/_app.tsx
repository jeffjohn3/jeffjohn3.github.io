import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "../styles/pdf.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
