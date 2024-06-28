import "../styles/globals.css";

import StateContextprovider from "../Context";
export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextprovider>
        <Component {...pageProps} />
      </StateContextprovider>

      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.meanmenu.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/magnific.min.js"></script>
      <script src="js/main.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/wow.min.js"></script>
    </>
  );
}
