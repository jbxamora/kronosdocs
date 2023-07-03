import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useConfig } from "nextra-theme-docs";
const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => false;
  }, [resolvedTheme]);
  return isDark;
};
/* @type import('nextra-theme-docs').DocsThemeConfig */
const theme = {
  project: {
    link: "https://github.com/jbxamora/kronosdocs",
  },
  editLink: {
    text: "Edit this page on GitHub!",
  },
  feedback: {
    content: "Question? Give me feedback →",
  },
  docsRepositoryBase: "https://github.com/jbxamora/kronosdocs/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Kronos",
    };
  },
  logo: function Logo() {
    const isDark = useDark();
    return (
      <>
        <img
          width="40"
          src={`/logo${isDark ? "-dark" : ""}.png`}
          alt="Kronos Logo"
        />
        <span>Kronos</span>
      </>
    );
  },
  head: function Head() {
    const router = useRouter();
    const isDark = useDark();
    const { frontMatter, title } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={`/logo${isDark ? "-dark" : ""}.png`}
          type="image/png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={frontMatter.description} />
        <meta
          property="og:url"
          content={`https://localhost:3000/${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`https://localhost:3000/${
            frontMatter.ogImage ?? "/og-image.png"
          }`}
        />
        <meta property="og:site_name" content="Kronos Projects Docs" />
      </>
    );
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://kronos.earth" target="_blank">
          Kronos
        </a>
        .
      </span>
    ),
  },
};
export default theme;
