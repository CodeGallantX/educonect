import { useState, useRef } from "react";
import { FaImage, FaCode, FaMarkdown, FaPaperPlane } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";

const QuestionBox = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (content.trim()) {
      console.log(`Submitted: ${content}`);
      setContent("");
      setImage(null);
    } else {
      alert("Please enter some text before submitting!");
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white space-y-4">
      <div className="flex flex-col space-y-2 border-b border-gray-700 pb-2">
        <button className="text-xl font-semibold">
          Create a student community
        </button>
        <span className="text-gray-200 text-sm text-center">Build a thriving student community and grow together</span>
      </div>

      <div className="relative space-y-4">
        <fieldset className="space-y-2 flex flex-col items-center justify-center">
          <button
            className="relative w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-700 border border-gray-500 flex items-center justify-center text-gray-600"
            onClick={() => fileInputRef.current.click()}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              ""
            )}
            <PiPencilSimple className="absolute bottom-0 right-0 text-gray-200 bg-gray-700 border border-gray-500 rounded-full p-2 text-4xl"/>
          </button>
          <label className="text-gray-300 font-semibold">Upload Image</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </fieldset>

        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">
            Name <span className="text-red-500 font-bold">*</span>
          </label>
          <input
            type="text"
            className="w-full text-[12px] sm:text-sm rounded-md pt-1.5 sm:py-2 px-4 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 border border-gray-500 focus:outline-none focus:ring-1 light:focus:ring-primary dark:focus:ring-gray-300 transition-all"
            
          />
        </fieldset>

        <fieldset className="space-y-1">
          <label className="text-gray-300 font-semibold">
            Description <span className="text-red-500 font-bold">*</span>
          </label>
          <textarea
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe your community here..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-gray-800 rounded-md p-4 text-white text-sm border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
          {isFocused && (
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-4 text-gray-400">
                <button
                  className={`p-2 rounded-full hover:bg-gray-600 ${selectedIcon === "image" ? "bg-gray-600" : ""
                    }`}
                  onClick={() => {
                    setSelectedIcon("image");
                    fileInputRef.current.click();
                  }}
                >
                  <FaImage size={20} />
                </button>
                <button
                  className={`p-2 rounded-full hover:bg-gray-600 ${selectedIcon === "code" ? "bg-gray-600" : ""
                    }`}
                  onClick={() => setSelectedIcon("code")}
                >
                  <FaCode size={20} />
                </button>
                <button
                  className={`p-2 rounded-full hover:bg-gray-600 ${selectedIcon === "markdown" ? "bg-gray-600" : ""
                    }`}
                  onClick={() => setSelectedIcon("markdown")}
                >
                  <FaMarkdown size={20} />
                </button>
              </div>
            </div>
          )}
        </fieldset>

      </div>
        <button
          onClick={handleSubmit}
          className="bg-primary w-full text-white py-3 rounded-lg"
          aria-label="Submit"
        >
          Create Community
        </button>
    </div>
  );
};

export default QuestionBox;
