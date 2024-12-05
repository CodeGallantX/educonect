import { useState, useRef } from "react";
import { FaImage, FaCode, FaMarkdown, FaPaperPlane } from "react-icons/fa";

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
      <div className="flex space-x-4 border-b border-gray-700 pb-2">
        <button className="text-lg font-semibold text-gray-400">
          Create Community
        </button>
      </div>

      <div className="relative space-y-4">
        <fieldset className="space-y-2 flex flex-col items-center justify-center">
          <button
            className="w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-700 border border-gray-500 flex items-center justify-center text-gray-600"
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

        <button
          onClick={handleSubmit}
          className="absolute right-3 bottom-3 bg-gray-600 text-white p-2 rounded-full"
          aria-label="Submit"
        >
          <FaPaperPlane className="text-base" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">Privacy:</span>
        <button
          onClick={() => setIsPublic(!isPublic)}
          className={`py-1 px-4 rounded-full text-sm font-medium transition ${
            isPublic
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          {isPublic ? "Public" : "Private"}
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
