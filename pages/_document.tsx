/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/static/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:type" content="summary" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@abhishekR_09" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
