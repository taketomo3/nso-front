import { RunModel } from "../../api/models/run"
import fetchAllDates from "../../hooks/fetch_all_dates"
import { isSameDate, strToDate } from "../../hooks/utils/dates"
import ADay from "./date"

const Calendar = ({ runs }: { runs: [RunModel] }) => {
  const beginningDate = strToDate(runs[0].date)
  const dates = fetchAllDates(beginningDate)

  return (
    <>
      <div className="fixed inset-x-0 flex items-center max-w-5xl px-4 pt-10 mx-auto bg-base-100 top-16">
        {Days.map((day, index) => (
          <div
            key={index}
            className={
              "flex-none text-center border-r-2 w-1/7 border-y-2" +
              (index === 0 ? " text-red-500 border-l-2" : "")
            }
          >
            {day}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap max-w-screen-xl mx-auto overflow-y-scroll" style={{ paddingTop: 68 }}>
        {dates.map((date, index) => {
          const run = runs.find(r => isSameDate(strToDate(r.date), date))
          return (
            <div
              key={index}
              className={
                "w-1/7 border-b-2 border-r-2" +
                (date.getDay() === 0 ? " border-l-2" : "")
              }
            >
              <ADay dateProp={date} run={run} />
            </div>
          )
        })}
      </div>
    </>
  )
}

const Days = ["日", "月", "火", "水", "木", "金", "土"]

export default Calendar