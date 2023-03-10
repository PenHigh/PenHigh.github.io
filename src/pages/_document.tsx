import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>PSS Coding Club</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The PHS Coding Club is a club that teaches students how to code and develop their own projects." />
        <meta name="author" content="PHS Coding Club" />
        <meta name="keywords" content="coding, club, phs, programming, technology, computer science" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
