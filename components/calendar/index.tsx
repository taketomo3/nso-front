import fetchAllDates from "../../hooks/fetch_all_dates"
import ADay from "./date"

const Calendar = () => {
  const dates = fetchAllDates(new Date())

  return (
    <>
      <div className="fixed inset-x-0 flex items-center px-4 pt-10 bg-white top-16">
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
        {dates.map((date, index) => (
          <div
            key={index}
            className={
              "w-1/7 border-b-2 border-r-2" +
              (date.getDay() === 0 ? " border-l-2" : "")
            }
          >
            <ADay dateProp={date} />
          </div>
        ))}
      </div>
    </>
  )
}

const Days = ["日", "月", "火", "水", "木", "金", "土"]

export default Calendar