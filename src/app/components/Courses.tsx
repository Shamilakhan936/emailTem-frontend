"use client";

import { projects } from "../lib/data";
import { FiEdit2, FiSave, FiX, FiPlus, FiTrash2 } from "react-icons/fi";
import { useState, useEffect } from "react";

const Courses = () => {
  const [coursesData, setCoursesData] = useState(projects);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('coursesData');
    if (savedData) {
      setCoursesData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('coursesData', JSON.stringify(coursesData));
    setIsEditing(false);
  };

  const handleChange = (id: number, field: string, value: string) => {
    setCoursesData(prev =>
      prev.map(course =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const addCourse = () => {
    const newId = Math.max(...coursesData.map(course => course.id)) + 1;
    setCoursesData(prev => [
      ...prev,
      {
        id: newId,
        title: "New Course",
        description: "Course description"
      }
    ]);
  };

  const removeCourse = (id: number) => {
    setCoursesData(prev => prev.filter(course => course.id !== id));
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-[16px] border-b-[1px] border-white mb-2 pb-[5px]">
        COURSES
      </h3>
      <ul className="mt-4 text-[12px]">
        {coursesData.map((course) => (
          <li key={course.id} className="mt-2 relative">
            {isEditing ? (
              <div>
                <div className="flex items-center justify-between">
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[80%] text-[14px] md:text-[#e6e6e6]"
                    value={course.title}
                    onChange={(e) => handleChange(course.id, 'title', e.target.value)}
                  />
                  <button
                    className="text-red-400 hover:text-red-600"
                    onClick={() => removeCourse(course.id)}
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
                <textarea
                  className="mt-2 bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-full resize-none md:text-[#e6e6e6]"
                  value={course.description}
                  onChange={(e) => handleChange(course.id, 'description', e.target.value)}
                  rows={2}
                />
              </div>
            ) : (
              <>
                <span className="text-[14px] md:text-[#e6e6e6]">{course.title}</span>
                <p className="mt-2 md:text-[#e6e6e6]">{course.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>

      {isEditing && (
        <>
          <button
            className="mt-4 text-blue-400 hover:text-blue-600 flex items-center gap-1"
            onClick={addCourse}
          >
            <FiPlus size={16} />
            <span className="text-sm">Add Course</span>
          </button>

          <div className="absolute top-[-20px] left-[30%] flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
            <button
              className="text-green-500 p-1 hover:bg-gray-200 rounded"
              onClick={handleSave}
            >
              <FiSave size={14} />
            </button>
            <button
              className="text-red-500 p-1 hover:bg-gray-200 rounded"
              onClick={() => setIsEditing(false)}
            >
              <FiX size={14} />
            </button>
          </div>
        </>
      )}

      {!isEditing && (
        <button
          className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
          onClick={() => setIsEditing(true)}
        >
          <FiEdit2 size={16} />
        </button>
      )}
    </div>
  );
};

export default Courses;
