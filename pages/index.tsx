import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>at Tattoo Homepage</title>
      </Head>

      <Header />

      <div className="h-screen"></div>
    </>
  );
}
