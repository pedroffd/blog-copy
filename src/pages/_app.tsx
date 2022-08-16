import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="bg-mainPurple-200 py-8 w-full">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
export default MyApp;
