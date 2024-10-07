import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
