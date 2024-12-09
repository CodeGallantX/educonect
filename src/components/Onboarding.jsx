import { Link } from 'react-router-dom';

const Onboarding = () => {
    return (
        <div className="min-h-screen flex flex-col items-start justify-end space-y-8 light:bg-gray-200 dark:bg-gray-800">
            <div className='relative h-[110vh] w-full flex flex-col items-start justify-end'>
                <div className='absolute bottom-0 w-full opacity-60 h-2/5 bg-black blur z-10'></div>
                <img 
                    src="https://st3.depositphotos.com/13152218/15594/i/380/depositphotos_155947526-stock-photo-young-smiling-multiethnic-women-looking.jpg" 
                    className='absolute w-full h-full object-cover'
                    alt="Onboarding illustration" />
                <div className='absolute w-full left-1/2 -translate-x-1/2 p-6 pb-2'>
                    <div className="flex flex-col space-y-4 items-start text-left text-white">
                        <h1 className="text-2xl font-semibold">Ask Questions with Ease</h1>
                        <p className="text-sm font-light">Post questions in any subject and get clear, reliable answers from students and contributors. Learning starts with a single question.</p>
                    </div>
                </div>
            <div className="flex flex-col items-start w-full justify-center space-y-2 p-6 pb-0">
                <Link to="/register" className="w-full">
                    <button className='w-full bg-primary text-white text-center py-3 px-4 rounded-lg' type="button">
                        Get started
                    </button>
                </Link>
                <p className="w-full text-sm light:text-gray-400 dark:text-white">Already have an account? <Link to="/login" className='font-bold underline transition duration-300 ease-in-out'>Log in</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Onboarding;
