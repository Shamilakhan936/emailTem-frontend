import { languages } from "../lib/data"; // Import the languages array

const Languages = () => {
  return (
    <div className="mt-6 mb-2">
      <h3 className="text-[16px] max-sm:font-bold font-normal border-b-[1px] border-white mb-2 md:text-white">
        LANGUAGES
      </h3>
      <div className="md:text-white">
        <ul className="text-[14px] space-y-3">
          {languages.map((language, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{language.name}</span>
              <div className="flex items-center space-x-4">
                <span>{language.level}</span>
                <div className="flex space-x-1">
                  {[...Array(language.proficiency)].map((_, i) => (
                    <div key={i} className="w-2 h-2 md:bg-white bg-black rounded-full"></div>
                  ))}
                  {[...Array(5 - language.proficiency)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
