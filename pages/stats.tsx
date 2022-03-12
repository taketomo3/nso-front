import dynamic from "next/dynamic"
import { useMemo } from "react"
import { CalendarIcon, ClockIcon, FireIcon, MapIcon } from "@heroicons/react/outline"

export const Stats = () => {
  const Map = useMemo(() =>
    dynamic(() => import("../components/map"), {
      ssr: false
    }), []
  )

  const Stats = [{
    theme: "Distance",
    value: 100,
    unit: "km",
  }, {
    theme: "Time",
    value: 10,
    unit: `h`,
  }, {
    theme: "Days",
    value: 20,
    unit: "days",
  }, {
    theme: "Goal", // 地球１周
    value: `${40000 - 100}`,
    unit: "km",
  }]

  return (
    <>
      <div className="flex flex-wrap -mx-4">
        {Stats.map((data, index) => (
          <div
            key={index}
            className="w-1/2 px-4 pt-4 md:w-1/4"
          >
            <div className="px-2 py-6 rounded-md shadow-md sm:px-8 md:px-2 lg:px-8 bg-base-100">
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row">
                <div className="flex-none hidden text-center sm:text-left md:text-center lg:text-left sm:block md:hidden lg:block">
                  {data.theme}
                </div>
                <div className={(() => {
                  let className = "flex items-center justify-center flex-none mx-auto rounded-full w-9 h-9 sm:mr-0 md:mx-auto lg:mr-0"

                  switch (index) {
                    case 0:
                      className += " bg-green-400"
                      break
                    case 1:
                      className += " bg-blue-400"
                      break
                    case 2:
                      className += " bg-yellow-400"
                      break
                    case 3:
                      className += " bg-red-400"
                      break
                  }
                  return className
                })()}>
                  {(() => {
                    switch (index) {
                      case 0:
                        return <MapIcon className="w-6 h-6 text-white" />
                      case 1:
                        return <ClockIcon className="w-6 h-6 text-white" />
                      case 2:
                        return <CalendarIcon className="w-6 h-6 text-white" />
                      case 3:
                        return <FireIcon className="w-6 h-6 text-white" />
                    }
                  })()}
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-2 md:mt-4 lg:mt-2 sm:text-left md:text-center lg:text-left">
                <span className="mr-2 text-4xl">{data.value}</span>
                {data.unit}
              </div>
              <div className="mt-1 text-center sm:hidden md:block lg:hidden">
                {data.theme}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Map dist_km={100} />
      </div>
    </>
  )
}

export default Stats