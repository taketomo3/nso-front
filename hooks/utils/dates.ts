export const isSameDate = (a: Date, b: Date): boolean => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export const fetchDateElement = (
  d: Date,
): {
  year: number
  month: number
  date: number
  day: number
} => {
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    date: d.getDate(),
    day: d.getDay(),
  }
}
