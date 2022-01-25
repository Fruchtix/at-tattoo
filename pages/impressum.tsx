import Header from '../components/Header';
import Head from 'next/head';

export default function Impresum() {
  return (
    <div>
      <Head>
        <title>Fineline Tattoo Artist - Tattoo by Amy - Impressum</title>
        <meta
          name="description"
          content="Fineline Tattoo Studio Wuppertal - Amelie Göbel - Impressum"
        />
      </Head>

      <Header />
      <div>Impressum</div>
    </div>
  );
}
