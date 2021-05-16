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
      <link rel="manifest" href="/static/manifest.json" />
      <meta
        name="description"
        content="Portfolio Website of Abhishek Ramasubramanian, 
                a Computer Science student currently studying in Vellore Institute of Technology, Vellore, 
                Tamil Nadu, India created using React"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main />
  </>
);

export default Home;
