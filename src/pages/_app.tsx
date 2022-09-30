import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { Meta } from '@/layout/Meta';

import { AppConfig } from '../utils/AppConfig';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="bg-mainPurple-200 py-8 w-full">
      <SessionProvider session={session}>
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
export default MyApp;
