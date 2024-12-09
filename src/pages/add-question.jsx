import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';

const App = () => {
    const [activeTab, setActiveTab] = useState('question');
    const [isPublic, setIsPublic] = useState(true);
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (content.trim()) {
            console.log(`Submitted: ${content}`);
            setContent('');
        } else {
            alert('Please enter some text before submitting!');
        }
    };

    return (
        <div className="relative bg-gray-900 px-10 pt-16 text-white space-y-6 flex flex-col min-h-screen items-center justify-start md:hidden md:h-auto">
            <button onClick={() => (navigate('/home'))}>
                <FaAngleLeft className="absolute left-8 top-6 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold" />
            </button>
            <div className="flex space-x-4 border-b border-gray-700 pb-2 w-full">
                <button
                    className={`text-lg font-semibold ${activeTab === 'question' ? 'text-gray-200 border-b-2 border-gray-300' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('question')}
                >
                    Add Question
                </button>
                <button
                    className={`text-lg font-semibold ${activeTab === 'post' ? 'text-gray-200 border-b-2 border-gray-300' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('post')}
                >
                    Create Post
                </button>
            </div>

            <div className="text-sm text-gray-400 w-full">
                {activeTab === 'question' ? (
                    <>
                        <strong>Tips for asking good questions:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Provide clear and specific details about your problem.</li>
                            <li>Keep your question concise and focused on a single topic.</li>
                        </ul>
                    </>
                ) : (
                    <>
                        <strong>Guidelines for creating posts:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Ensure your content is relevant and adds value to the community.</li>
                            <li>Use appropriate language and avoid offensive terms.</li>
                        </ul>
                    </>
                )}
            </div>

            <div className="relative w-full">
                <textarea
                    rows="3"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={activeTab === 'question' ? 'Ask your question here...' : 'Write your post here...'}
                    className="w-full bg-gray-800 p-4 text-white text-sm border-b border-b-gray-600 focus:outline-none focus:border-b-gray-400 pr-10 transition duration-200 ease-in-out"
                />
                <button
                    onClick={handleSubmit}
                    className="absolute right-3 bottom-3 bg-gray-600 text-white p-2 rounded-full"
                    aria-label="Submit"
                >
                    <FaPaperPlane className="text-base" />
                </button>
            </div>

            <div className="flex items-center justify-between w-full">
                <span className="text-gray-400 text-sm">Privacy:</span>
                <button
                    onClick={() => setIsPublic(!isPublic)}
                    className={`py-1 px-4 rounded-full text-sm font-medium transition ${isPublic ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                >
                    {isPublic ? 'Public' : 'Private'}
                </button>
            </div>
        </div>
    );
};

export default App;
