import { FramerBasic } from '@modules/FramerBasic';
import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Framer Api References</title>
      </Head>{' '}
      <FramerBasic />;
    </>
  );
};

export default Home;
