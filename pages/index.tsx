import Head from 'next/head'
import NavigationBar from '../components/Navigation'
import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'
import Intro from '../components/Main/Intro'
import About from '../components/Main/About'
import Experience from '../components/Main/Experience'
import Projects from '../components/Main/Projects'
import ContactMe from '../components/Main/ContactMe'

export type listUserReposResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export type HomePageProps = {
  repos: {
    id: listUserReposResponse['id']
    name: listUserReposResponse['name']
    html_url: listUserReposResponse['html_url']
    language: listUserReposResponse['language']
    description: listUserReposResponse['description']
    homepage: listUserReposResponse['homepage']
  }[]
}

const Home = ({ repos }: HomePageProps) => (
  <>
    <Head>
      <title>Abhishek Ramasubramanian</title>
    </Head>

    <div className="bg-slate-900 text-amber-100 selection:bg-amber-100 selection:text-amber-900">
      <NavigationBar />
      <main className="mx-auto rounded-md py-0 px-5 xsm:px-8 md:px-24 lg:px-36">
        <Intro />
        <About />
        <Experience />
        <Projects repos={repos} />
        <ContactMe />
      </main>
    </div>
  </>
)

export const getStaticProps = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const res = await octokit.request('GET /users/{username}/repos', {
    username: 'Abhishek-R09',
    sort: 'created',
    direction: 'desc',
  })
  const repos = res.data

  const reqRepoData = repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    language: repo.language,
    description: repo.description,
    homepage: repo.homepage,
  }))

  const data = reqRepoData.filter(
    (d) =>
      d.name !== 'Farm-Trade' &&
      d.name !== 'Pharmacy-Management-System' &&
      d.name !== 'Todo-List-App-React'
  )

  return {
    props: {
      repos: data,
    },
  }
}

export default Home
