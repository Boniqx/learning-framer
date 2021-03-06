import { Framer } from '@modules/Framer';
import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Learning Framer</title>
      </Head>{' '}
      <Framer />
    </>
  );
};

export default Home;
