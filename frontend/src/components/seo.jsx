import Head from "next/head";

const SEO = ({ pageTitle, font, index=false }) => (
  <>
    <Head>
      <title>
        {index ? 
        "Giovanni Borgogno - Portfolio"
      :
        pageTitle && `${pageTitle} - Giovanni Borgogno`
      }
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Innovative web and software development solutions for businesses of all sizes. Get in touch today to start your project." />
      <meta name="keywords" content="web development, software development, startups, businesses, IT solutions" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;