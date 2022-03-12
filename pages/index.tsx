import Head from "next/head"
import Calendar from "../components/calendar"

const Home = () => {
  return (
    <>
      <Head>
        <title>No Slacking Off</title>
      </Head>

      <Calendar />
    </>
  )
}

export default Home
