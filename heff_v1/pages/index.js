import Layout from '../components/layouts/Main'
import Landing from '../components/Landing'
import LandingTwo from '../components/LandingTwo'
import LandingThree from '../components/LandingThree'

export default function Home() {
  return (
    <Layout>
      <Landing />
      <LandingTwo />
      <LandingThree />
    </Layout>

  )
}
