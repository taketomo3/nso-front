import Link from "next/link"
import { RunModel } from "../../api/models/run"
import { CheckIcon } from "@heroicons/react/solid"
import { fetchDateElement, isSameDate } from "../../hooks/utils/dates"
import { secToHour } from "../../hooks/utils/times"

const ADate = ({ dateProp, run }: { dateProp: Date, run: RunModel | undefined }) => {
  const { month, date, day } = fetchDateElement(dateProp)
  let hour = 0, min = 0

  if (run) {
    const { hour: h, min: m } = secToHour(run.time_second)
    hour = h, min = m
  }

  return (
    <div className={"h-16 md:h-24 p-2 text-center md:text-left"}>
      <span className={day === 0 ? "text-red-500" : ""}>
        {date === 1 && <>
          <span className="pr-1 text-2xl">
            {month}
          </span>
          /
        </>}
        <span className={isSameDate(dateProp, new Date()) ? "text-primary" : ""}>
          {date}
        </span>
      </span>

      {/* スマホ用 */}
      {run && (
        <Link href="" prefetch={false}>
          <a className="block md:hidden">
            <CheckIcon aria-hidden="true" className={"w-5 h-5 mx-auto" + (
              run.distance >= 30 ? ` text-purple-600 hover:text-purple-500` : (
                run.distance >= 20 ? ` text-red-500 hover:text-red-400` : (
                  run.distance >= 10 ? ` text-yellow-400 hover:text-yellow-300` : ` text-green-400 hover:text-green-300`
                )
              )
            )} />
          </a>
        </Link>
      )}

      {/* pc用 */}
      {run && (
        <Link href="" prefetch={false}>
          <a className="flex-1 hidden h-4 md:block">
            <div className={"px-2 py-1 mx-1 text-xs rounded-lg" + (
              run.distance >= 30 ? ` bg-purple-600 hover:bg-purple-500` : (
                run.distance >= 20 ? ` bg-red-500 hover:bg-red-400` : (
                  run.distance >= 10 ? ` bg-yellow-400 hover:bg-yellow-300` : ` bg-green-400 hover:bg-green-300`
                )
              )
            )}>
              {Math.floor(run.distance)} km
              <span className="hidden md:inline"> / </span>
              <br className="md:hidden" />
              {hour !== 0 && <>
                {`${hour}h `}
              </>}
              {min}m
            </div>
          </a>
        </Link>
      )}
    </div>
  )
}

export default ADate