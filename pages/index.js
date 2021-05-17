import Head from 'next/head';
import Main from '../components/Main/Main';

const Home = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Abhishek's Personal Website</title>
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="/static/favicons/apple-touch-icon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India created using React"
      />
      <meta property="og:type" content="summary" />
      <meta property="og:title" content="Check out my website!" />
      <meta
        property="og:description"
        content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India created using React & Next.js"
      />
      <meta
        property="og:image"
        content="https://abhishek-r.tech/static/images/introBgPresentation.jpg"
      />
      <meta
        property="og:image:alt"
        content="A Developer doing coding inside an aeroplane"
      />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@abhishekR_09" />
      <meta property="twitter:title" content="Check out my website!" />
      <meta
        property="twitter:description"
        content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India created using React & Next.js"
      />
      <meta
        property="twitter:image"
        content="https://abhishek-r.tech/static/images/introBgPresentation.jpg"
      />
      <meta
        property="twitter:image:alt"
        content="A Developer doing coding inside an aeroplane"
      />
    </Head>
    <Main />
  </>
);

export default Home;
