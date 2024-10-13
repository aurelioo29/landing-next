import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    customBlue: {
      500: "#1b1c51",
    },
    customYellow: {
      500: "#f3ca2f",
    },
  },
});

export default theme;
