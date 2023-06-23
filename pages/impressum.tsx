import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';

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

      <div className="px-5 mt-8 md:px-0 md:max-w-screen-2xl md:mx-10 2xl:mx-auto overflow-hidden">
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">Impressum</h1>

        <h2 className="font-semibold text-xl tracking-wider mt-4">
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p>
          Amelie G&ouml;bel
          <br />
          Ludwigstr. 100
          <br />
          42105 Wuppertal
        </p>

        <h2 className="font-semibold text-xl tracking-wider mt-4">Kontakt</h2>
        <p>E-Mail: kontakt@at-tattoos.com</p>

        <h2 className="font-semibold text-xl tracking-wider mt-4">EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="font-semibold text-xl tracking-wider mt-4">
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle:{' '}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
