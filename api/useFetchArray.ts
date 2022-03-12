import useSWR from 'swr'
import fetcher from './fetcher'

export const API_URL = 'https://immense-meadow-97922.herokuapp.com'

export const useFetchArray = ({ path }: { path: string }) => {
  const { data, error } = useSWR(path, fetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  }
}
