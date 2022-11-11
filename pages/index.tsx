import Head from 'next/head'
import Main from '../components/Main/Main'
import NavigationBar from '../components/Navigation'

const Home = () => (
  <>
    <Head>
      <title>Abhishek Ramasubramanian</title>
    </Head>

    <div className="bg-slate-900 text-amber-100 selection:bg-amber-100 selection:text-amber-900">
      <NavigationBar />
      <Main />
    </div>
  </>
)

export default Home
