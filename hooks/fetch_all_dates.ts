const fetchAllDates = (beginningDate: Date) => {
  const dates: Date[] = []

  const one_month_before = new Date(new Date().setMonth(new Date().getMonth() - 1))
  const start = beginningDate > one_month_before ? one_month_before : beginningDate

  if (start.getDay() !== 0) {
    start.setDate(start.getDate() - start.getDay())
  }

  for (let d = start; d <= new Date(); d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d))
  }

  return dates
}

export default fetchAllDates
