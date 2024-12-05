import CommunityCard from './CommunityCard'
import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-start w-full space-x-5 w-3/4 lg:w-2/3 xl:w-1/2">
        <a href="/community" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-gray-900 border light:border-gray-500 dark:border-gray-900 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </a>
        <a href="/community" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-gray-700 border dark:border-gray-500 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Join community</span>
        </a>
    </div>
    </>
  )
}

export default LeftPane