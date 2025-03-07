"use client";
import { useState } from "react";

// Define the Strength type
type Strength = {
  title: string;
  description: string;
};

const Strengths = () => {
  const [strengths, setStrengths] = useState<Strength[]>([
    { title: "Web Design", description: "Proficient in creating visually appealing and user-friendly designs." },
    { title: "Project Management", description: "Experience with various project management tools and techniques." },
    { title: "Problem-Solving", description: "Strong problem-solving skills and ability to work in a team." },
    { title: "Strong Communication", description: "Excellent communication skills for collaborative projects." },
  ]);

  const handleBlur = (index: number, field: keyof Strength, event: React.FocusEvent<HTMLDivElement>) => {
    setStrengths((prevStrengths) =>
      prevStrengths.map((strength, i) =>
        i === index ? { ...strength, [field]: event.target.innerText } : strength
      )
    );
  };

  const removeStrength = (index: number) => {
    setStrengths((prevStrengths) => prevStrengths.filter((_, i) => i !== index));
  };

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">STRENGTHS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {strengths.map((strength, index) => (
          <article key={index} className="flex flex-col gap-3 items-start border-b border-gray-300 pb-4">
            <h3
              className="font-semibold text-gray-900 cursor-pointer border border-transparent p-1 hover:border-gray-400"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "title", e)}
            >
              {strength.title}
            </h3>
            <p
              className="text-gray-900 text-sm cursor-pointer border border-transparent p-1 hover:border-gray-400"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(index, "description", e)}
            >
              {strength.description}
            </p>
            <button
              onClick={() => removeStrength(index)}
              className="text-red-600 text-xs hover:underline"
            >
              Remove
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Strengths;
