/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#0f172a"
          />
          <meta name="msapplication-TileColor" content="#0f172a" />
          <meta name="theme-color" content="#0f172a" />
          <meta property="og:type" content="summary" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@abhishekR_09" />

          <meta
            name="description"
            content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India. He's passionate about web development and cloud computing"
          />
          <meta property="og:title" content="Check out my website!" />
          <meta
            property="og:description"
            content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India. He's passionate about web development and cloud computing."
          />
          <meta
            property="og:image"
            content="https://www.abhishekr.dev/static/images/introBgPresentation.jpg"
          />
          <meta property="og:image:alt" content="Coding in an aeroplane" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
