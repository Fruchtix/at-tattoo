import { AppProps } from 'next/app';
import '../styles/globals.css';
// import '../lib/firebase';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
