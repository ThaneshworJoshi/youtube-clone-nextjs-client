import Head from 'next/head';
import '../styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Youtube clone</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'light' }}
      >
        <NotificationsProvider>
          {getLayout(
            <main>
              <Component {...pageProps} />;
            </main>
          )}
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
