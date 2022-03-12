import { API_URL, useFetchArray } from './useFetchArray'

export const useStats = () => {
  return useFetchArray({
    path: `${API_URL}/summaries`,
  })
}
