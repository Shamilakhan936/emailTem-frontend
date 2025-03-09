"use client";
import { useState } from "react";

// Define Education type
type EducationData = {
  title: string;
  degree: string;
  institution: string;
  description: string;
};

const Education = () => {
  const [education, setEducation] = useState<EducationData>({
    title: "EDUCATION",
    degree: "Bachelor's in Computer Science",
    institution: "University of XYZ | 2012 - 2016",
    description:
      "• Graduated with honors and a 3.8 GPA. • Specialized in frontend development and UX/UI design.",
  });

  const [editingField, setEditingField] = useState<string | null>(null);

  const handleChange = (field: keyof EducationData, value: string) => {
    setEducation((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="rounded-lg my-4">
      {/* Title */}
      {editingField === "title" ? (
        <input
          type="text"
          value={education.title}
          onChange={(e) => handleChange("title", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-xl font-semibold text-gray-900 border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <h2
          className="text-xl font-semibold text-gray-900 cursor-pointer"
          onClick={() => setEditingField("title")}
        >
          {education.title}
        </h2>
      )}

      <hr className="border-t-2 border-black mt-1" />

      {/* Degree */}
      {editingField === "degree" ? (
        <input
          type="text"
          value={education.degree}
          onChange={(e) => handleChange("degree", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-lg font-normal text-[#3c6df0] border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <h3
          className="text-lg font-normal text-[#3c6df0] cursor-pointer mt-2"
          onClick={() => setEditingField("degree")}
        >
          {education.degree}
        </h3>
      )}

      {/* Institution */}
      {editingField === "institution" ? (
        <input
          type="text"
          value={education.institution}
          onChange={(e) => handleChange("institution", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-gray-500 border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <p className="text-gray-500 cursor-pointer" onClick={() => setEditingField("institution")}>
          {education.institution}
        </p>
      )}

      {/* Description */}
      {editingField === "description" ? (
        <textarea
          value={education.description}
          onChange={(e) => handleChange("description", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-gray-900 mt-2 border border-gray-300 rounded p-1 w-full"
          rows={3}
        />
      ) : (
        <p className="text-gray-900 mt-2 cursor-pointer" onClick={() => setEditingField("description")}>
          {education.description}
        </p>
      )}
    </section>
  );
};

export default Education;
