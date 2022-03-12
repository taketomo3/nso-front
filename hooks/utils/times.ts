export const secToHour = (
  sec: number,
): {
  hour: number
  min: number
  sec: number
} => {
  const hour = Math.floor(sec / (60 * 60))
  const min = Math.floor(sec / 60 - hour * 60)

  return {
    hour: hour,
    min: min,
    sec: sec - hour * 60 * 60 - min * 60,
  }
}
