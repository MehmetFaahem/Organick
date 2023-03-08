import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  themer: {
    mone: "#274C5B",
    mtwo: "#7EB693",
    mthree: "#EFD372",
    mfour: "#D4D4D4",
    mfive: "#F9F8F8",
    msix: "#EFF6F1",
    mseven: "#525C60",
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
