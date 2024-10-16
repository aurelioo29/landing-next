import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    customBg: {
      500: "#010b17",
    },
    customGray: {
      500: "#6a7c95",
    },
    customBlue: {
      500: "#32abf1",
    },
  },
});

export default theme;
