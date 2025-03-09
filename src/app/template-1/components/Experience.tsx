"use client";
import { useState } from "react";

// Define Experience type
type ExperienceData = {
  title: string;
  position: string;
  company: string;
  description: string;
};

const Experience = () => {
  const [experience, setExperience] = useState<ExperienceData>({
    title: "EXPERIENCE",
    position: "Senior Account Executive",
    company: "TechSolutions Inc. | 01/2020 - Present | Denver, CO",
    description:
      "• Drove a 150% increase in B2B software solutions sales by identifying new market opportunities and optimizing sales strategies. • Initiated and nurtured relationships across 40+ national accounts, leading to a 35% increase in client retention.",
  });

  const [editingField, setEditingField] = useState<string | null>(null);

  const handleChange = (field: keyof ExperienceData, value: string) => {
    setExperience((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="rounded-lg my-4">
      {/* Title */}
      {editingField === "title" ? (
        <input
          type="text"
          value={experience.title}
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
          {experience.title}
        </h2>
      )}

      <hr className="border-t-2 border-black mt-1" />

      {/* Position */}
      {editingField === "position" ? (
        <input
          type="text"
          value={experience.position}
          onChange={(e) => handleChange("position", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-lg font-semibold text-[#3c6df0] border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <h3
          className="text-lg font-normal text-[#3c6df0] cursor-pointer mt-2"
          onClick={() => setEditingField("position")}
        >
          {experience.position}
        </h3>
      )}

      {/* Company */}
      {editingField === "company" ? (
        <input
          type="text"
          value={experience.company}
          onChange={(e) => handleChange("company", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-gray-500 border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <p className="text-gray-500 cursor-pointer" onClick={() => setEditingField("company")}>
          {experience.company}
        </p>
      )}

      {/* Description */}
      {editingField === "description" ? (
        <textarea
          value={experience.description}
          onChange={(e) => handleChange("description", e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-gray-900 mt-2 border border-gray-300 rounded p-1 w-full"
          rows={3}
        />
      ) : (
        <p className="text-gray-900 mt-2 cursor-pointer" onClick={() => setEditingField("description")}>
          {experience.description}
        </p>
      )}
    </section>
  );
};

export default Experience;
