const theme = {
  titleSuffix: " | Kronos",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/jbxamora/kronosdocs",
  projectLink: "https://github.com/jbxamora/kronosdocs",
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Kronos Docs <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.svg"
        />
        <link rel="mask-icon" href="/logo.svg" color="#000000" />
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website with in depth descriptions of Kronos Projects"
        />
        <meta
          name="description"
          content="Website with in depth descriptions of Kronos Projects"
        />
        <meta name="author" content="Jorge Zamora" />
        <meta
          property="og:url"
          content="https://localhost:3000"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | Kronos Docs`}
        />
        <meta
          property="og:description"
          content="In depth documentation of projects under Kronos Umbrella"
        />
        <meta
          property="og:image"
          content="https://kronos.earth/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kronos_earth" />
        <meta name="twitter:creator" content="@kronos_earth" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © Jorge Zamora`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
