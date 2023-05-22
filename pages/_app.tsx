import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from 'next/app';

import { RootState, store } from '@redux/index';
import { Provider } from 'react-redux';
import 'animate.css';
import '../styles/hover.css';

import '../styles/globals.scss';

import { useRouter } from 'next/router';
import Boilerplate from "@/components/Organisms/Boilerplate";

import Router from 'next/router';


Router.events.on('routeChangeStart', (url) => {
  //console.log(`Loading: ${url}`, "Loading Router in app");
});

//Router.events.on('routeChangeComplete', () => console.log('routeChangeComplete'));

//Router.events.on('routeChangeError', () => console.log('routeChangeError'));



export default function App({ Component, pageProps }: AppProps) {


  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Provider store={store}>
        <Boilerplate>
          <Component {...pageProps} />
        </Boilerplate>
      </Provider>
    </React.Fragment>
  );
}
