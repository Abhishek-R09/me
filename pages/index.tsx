import Head from 'next/head';
import Main from '../components/Main/Main';
import { customTitle } from '../helpers/customDocProps';
import NavigationBar from '../components/Navigation';

const Home = () => (
  <>
    <Head>
      <title>{customTitle('Home')}</title>
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

    <div className="bg-slate-900">
      <NavigationBar />
      <Main />
    </div>
  </>
);

export default Home;
