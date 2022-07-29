import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-mainPurple-200 py-8 w-full">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
