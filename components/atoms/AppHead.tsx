import Head from 'next/head';

const mainText = 'Juanita Soho: Vacation Rentals & Unique Homes';

type AppHeadProps = {
  title?: string;
  description?: string;
};

const AppHead = ({ title = mainText, description = mainText }: AppHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default AppHead;
