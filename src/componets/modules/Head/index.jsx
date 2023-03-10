import Head from 'next/head';
import config from '../../../../config';

const BrowserHead = () => {
  const { BASE_PATH: basePath } = config;

  return (
    <Head>
      <title>web-card</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={`${basePath}/favicon.ico`} />
    </Head>
  );
};

export default BrowserHead;
