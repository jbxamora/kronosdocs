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
  editLink: false,
  feedback: false,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: {
    darks:175,
    light:360,
  },
  docsRepositoryBase: "https://github.com/jbxamora/kronosdocs/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Kronos",
      };
    }
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
      <div className="flex w-full flex-col items-center sm:items-start">
        <div></div>
        <p className="text-xs">
          © {new Date().getFullYear()} The Kronos Project.
        </p>
      </div>
    ),
  },
};
export default theme;
