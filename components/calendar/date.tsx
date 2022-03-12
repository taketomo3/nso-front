import { fetchDateElement, isSameDate } from "../../hooks/utils/dates"

const ADate = ({ dateProp }: { dateProp: Date }) => {
  const { month, date, day } = fetchDateElement(dateProp)
  return (
    <div className={"h-16 p-2 text-center md:text-left" + (day === 0 ? " text-red-500" : "")}>
      {date === 1 && <>
        <span className="pr-1 text-2xl">
          {month}
        </span>
        /
      </>}
      <span className={isSameDate(dateProp, new Date()) ? "text-primary" : ""}>
        {date}
      </span>
    </div>
  )
}

export default ADate