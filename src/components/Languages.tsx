"use client";
import { useState } from "react";

// Define the Language type
type Language = {
  name: string;
  level: string;
  rating: number;
};

const Languages = () => {
  const [languages, setLanguages] = useState<Language[]>([
    { name: "English", level: "Proficient", rating: 4 },
    { name: "Urdu", level: "Native", rating: 5 },
  ]);

  const handleBlur = (index: number, field: keyof Language, event: React.FocusEvent<HTMLDivElement>) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language, i) =>
        i === index ? { ...language, [field]: event.target.innerText } : language
      )
    );
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">LANGUAGES</h2>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 mt-4">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center gap-6">
            <div>
              <h3
                className="font-semibold mb-[-10px] text-gray-900 cursor-pointer border border-transparent p-1 hover:border-gray-400"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "name", e)}
              >
                {language.name}
              </h3>
              <p
                className="text-gray-600 text-sm cursor-pointer border border-transparent p-1 hover:border-gray-400"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleBlur(index, "level", e)}
              >
                {language.level}
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() =>
                    setLanguages((prevLanguages) =>
                      prevLanguages.map((lang, langIndex) =>
                        langIndex === index ? { ...lang, rating: i + 1 } : lang
                      )
                    )
                  }
                  className={`h-[15px] w-[15px] rounded-full cursor-pointer ${
                    i < language.rating ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
