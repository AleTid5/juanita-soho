import Head from 'next/head';

const title = 'Juanita Soho: Vacation Rentals & Unique Homes';
const description = 'The greatest outdoors, in the vibrant neighborhood of Palermo.';

const AppHead = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image" content="/assets/images/logoBanner.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:image" content="/assets/images/logoBanner.png" />
    </Head>
  );
};

export default AppHead;
