import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { Signika } from '@next/font/google';

const signikaFont = Signika();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={signikaFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
