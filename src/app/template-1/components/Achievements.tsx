"use client";
import { useState } from "react";

const Achievements = () => {
  const [title, setTitle] = useState("KEY ACHIEVEMENTS");
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      heading: "Maximized Referral Business",
      description:
        "Initiated a client referral program that resulted in a sustained 10% YoY increase in business.",
    },
    {
      id: 2,
      heading: "Strategic Account Growth",
      description:
        "Successfully expanded key account portfolio by 40% within 12 months.",
    },
  ]);

  const updateAchievement = (id: number, field: "heading" | "description", value: string) => { 
    setAchievements((prev) =>
      prev.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    );
  };

  return (
    <section className="rounded-lg my-6 bg-gray-50 ">
      <h2
        className="text-2xl font-bold text-gray-900 cursor-pointer border-b-2 pb-2 hover:bg-gray-100 px-2 rounded-md"
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => setTitle(e.target.innerText)}
      >
        {title}
      </h2>

      <div className="mt-4 flex flex-col gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="p-5 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
          >
            <h3
              className="font-semibold text-gray-900 cursor-pointer border border-transparent p-1 hover:border-gray-400"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateAchievement(achievement.id, "heading", e.target.innerText)
              }
            >
              {achievement.heading}
            </h3>
            <p
              className="text-gray-600 text-sm cursor-pointer border border-transparent p-1 hover:border-gray-400"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateAchievement(
                  achievement.id,
                  "description",
                  e.target.innerText
                )
              }
            >
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
