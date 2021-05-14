import Head from 'next/head';
import Main from '../components/Main/Main';

const Home = () => (
  <>
    <Head>
      <title>Abhishek's Personal Website</title>
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
