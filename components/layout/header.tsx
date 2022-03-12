import { ChartBarIcon, PencilIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 h-16 border-b-2 bg-base-100 border-b-zinc-200">
      <div className='flex items-center justify-between h-full max-w-5xl px-4 mx-auto'>
        <Link href={"/"} prefetch={false}>
          <a className="flex-none text-xl font-semibold md:text-3xl">
            No Slacking Off
          </a>
        </Link>
        <div className='flex justify-center flex-init'>
          <Link href="/stats">
            <a className="flex items-center h-10 px-4 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
              <ChartBarIcon className="flex-none w-5 h-5" aria-hidden="true" />
              <span className="flex-none hidden ml-2 text-sm sm:inline">
                Record
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center px-4 ml-2 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none">
              <PencilIcon className="flex-none w-5 h-5" aria-hidden="true" />
              <span className="flex-none hidden ml-2 text-sm sm:inline">
                Add
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header