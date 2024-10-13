import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    customBlue: {
      500: "#32abf1",
    },
    customYellow: {
      500: "#f3ca2f",
    },
  },
});

export default theme;
