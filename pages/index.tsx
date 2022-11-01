import Head from 'next/head';
import Main from '../components/Main/Main';
import { customTitle } from '../helpers/customDocProps';
import NavigationBar from '../components/Navigation';

const Home = () => (
  <>
    <Head>
      <title>Abhishek Ramasubramanian</title>
    </Head>

    <div className="bg-slate-900">
      <NavigationBar />
      <Main />
    </div>
  </>
);

export default Home;
