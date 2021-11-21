import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>at Tattoo Homepage</title>
      </Head>

      <Header />
      <Hero />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
