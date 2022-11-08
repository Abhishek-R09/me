import Head from 'next/head'
import Main from '../components/Main/Main'
import NavigationBar from '../components/Navigation'

const Home = () => (
  <>
    <Head>
      <title>Abhishek Ramasubramanian</title>
    </Head>

    <div className="bg-slate-900 text-sky-200 selection:bg-slate-200 selection:text-slate-800">
      <NavigationBar />
      <Main />
    </div>
  </>
)

export default Home
