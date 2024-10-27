import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lightTheme } from "@/styles/lightTheme";
import { deDE as coreDeDE, frFR as coreFrFR } from "@mui/material/locale";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const queryClient = new QueryClient();

const locales = {
  "de-DE": coreDeDE,
  "fr-FR": coreFrFR,
};

export default function App({ Component, pageProps }: AppProps) {
  const themeWithLocale = createTheme(lightTheme, locales["fr-FR"]);

  return (
    <ThemeProvider theme={themeWithLocale}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
