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
                Tamil Nadu, India. He's passionate about web development and cloud computing"
      />
      <meta property="og:type" content="summary" />
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
      <meta
        property="og:image:alt"
        content="A Developer doing coding inside an aeroplane"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@abhishekR_09" />
    </Head>
    <Main />
  </>
);

export default Home;
