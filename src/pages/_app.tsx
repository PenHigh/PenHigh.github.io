import React from 'react';
import type { AppProps } from 'next/app';
import { Signika } from '@next/font/google';

import '../styles/globals.css';

const signikaFont = Signika();


const App = ({ Component, pageProps }: AppProps) => (
  <div className={signikaFont.className}>
    <Component {...pageProps} />;
  </div>
);

export default App;
