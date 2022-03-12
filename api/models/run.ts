export type RunModel = {
  id: number
  date: string
  distance: number
  time_second: number
  sec_per_km: number
  ground_around_count: number
  user: {
    id: number
    nickname: string
  }
}
