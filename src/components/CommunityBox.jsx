import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-900 rounded-lg text-left text-white space-y-6 w-full">
      <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-white">Welcome to Community</h2>
      <p className="text-sm">Join a community for peer learning and resources sharing</p>
      </div>
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start w-full space-x-3 sm:space-x-5 w-3/4 lg:w-2/3 xl:w-1/2">
    <a href="/create-community" className="flex flex-row w-auto sm:w-full space-x-2 items-center justify-center text-white bg-transparent border border-gray-500 py-2 px-3 rounded-full w-4/5 sm:w-full">
                <FaPlusCircle className="text-lg inline-flex"/>
                <span className='text-sm'>Create community</span>
        </a>
        <a href="#suggestedCommunities" className="text-center text-white bg-transparent border border-gray-500 py-1.5 px-3 rounded-full w-4/5 sm:w-full">
                <span className='text-sm'>Discover communities</span>
        </a>
    </div>
    </div>
  )
}

export default LeftPane