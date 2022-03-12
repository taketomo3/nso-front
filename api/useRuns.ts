import { API_URL, useFetchArray } from './useFetchArray'

export const useRuns = () => {
  return useFetchArray({
    path: `${API_URL}/run`,
  })
}
