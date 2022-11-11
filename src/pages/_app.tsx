import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { Meta } from '@/layout/Meta';

import { AppConfig } from '../utils/AppConfig';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
