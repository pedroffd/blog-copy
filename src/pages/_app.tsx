import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-violet-200 py-8">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
