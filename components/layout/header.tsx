import { ChartBarIcon, PencilIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 h-16 bg-white border-b-2 border-b-zinc-200">
      <div className='flex items-center justify-between max-w-5xl px-4 py-2 mx-auto'>
        <Link href={"/"} prefetch={false}>
          <a className="flex-none text-xl font-semibold md:text-3xl">
            No Slacking Off
          </a>
        </Link>
        <div className='flex justify-center flex-init'>
          <button className="flex-none gap-2 btn btn-outline btn-primary">
            <ChartBarIcon className='w-5 h-5' />
            <span className='hidden md:inline'>
              Record
            </span>
          </button>
          <button className="flex-none gap-2 ml-2 btn btn-outline btn-primary">
            <PencilIcon className='w-5 h-5' />
            <span className='hidden md:inline'>
              add
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header