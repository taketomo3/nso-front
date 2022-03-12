import Head from "next/head"
import { RunModel } from "../api/models/run"
import { useRuns } from "../api/useRuns"
import Calendar from "../components/calendar"
import { Loading } from "../components/loading"

const Home = () => {
  const { data: runs, error, isLoading }: {
    data: [RunModel]
    error: string
    isLoading: boolean
  } = useRuns()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <>{error}</>
  }

  return (
    <>
      <Head>
        <title>No Slacking Off</title>
      </Head>

      <Calendar runs={runs} />
    </>
  )
}

export default Home
