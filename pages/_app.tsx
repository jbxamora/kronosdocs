import "../styles.css";
import "nextra-theme-docs/style.css";
import "../custom.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
