/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default function Document() {
  const router = useRouter()

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicons/favicon.ico?v=2" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/static/favicons/favicon-194x194.png?v=2"
        ></link>
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg?v=2"
          color="#0f172a"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicons/android-chrome-192x192.png?v=2"
        ></link>
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta
          name="msapplication-TileImage"
          content="/static/favicons/mstile-144x144.png?v=2"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="description"
          content="Portfolio Website of Abhishek Ramasubramanian, a passionate computer science student currently studying in Vellore Institute of Technology, Vellore."
        />

        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhishek Ramasubramanian" />
        <meta
          property="og:description"
          content="Portfolio Website of Abhishek Ramasubramanian, a passionate computer science student currently studying in Vellore Institute of Technology, Vellore."
        />
        <meta property="og:image" content="/static/images/cover.png" />
        <meta
          property="og:image:alt"
          content="Landing Page view of Abhishek R's website"
        />
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@_abhish1_" />
        <meta property="twitter:domain" content="/" />
        <meta property="twitter:url" content="/" />
        <meta name="twitter:title" content="Abhishek Ramasubramanian" />
        <meta
          name="twitter:description"
          content="Portfolio Website of Abhishek Ramasubramanian, a passionate computer science student currently studying in Vellore Institute of Technology, Vellore."
        />
        <meta name="twitter:image" content="/static/images/cover.png" />
        <meta
          property="twitter:image:alt"
          content="Landing Page view of Abhishek R's website"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
