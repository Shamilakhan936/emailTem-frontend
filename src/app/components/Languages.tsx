import { languages } from "../lib/data"; 

const Languages = () => {
  return (
    <div className="mt-6 ">
      <h3 className="text-[16px]  font-normal border-b-[1px] border-[#bdbdbd] pb-[5px] mb-2 md:text-[#2c2a2a]">
        LANGUAGES
      </h3>
      <div className="grid grid-cols-6 text-start items-center">
        {languages.map((language, index) => (
          <>
            <span key={`name-${index}`} className="text-[14px] font-normal text-[#2c2a2a]">
              {language.name}
            </span>

            <span key={`level-${index}`} className="text-[12px] text-gray-600">
              {language.level}
            </span>

            <div key={`dots-${index}`} className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 mx-[2px] rounded-full ${
                    i < language.proficiency ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Languages;
