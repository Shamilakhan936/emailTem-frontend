"use client";

import { MdPhone } from "react-icons/md"; 
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import data from "../lib/data";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [formData, setFormData] = useState({
    name: data.name,
    role: data.role,
    phone: data.phone,
    email: data.email,
    github: data.github,
    location: data.location,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('headerData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('headerData', JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="relative max-w-md mb-6">
      <div className="space-y-1">
        <h2 className="md:text-[28px] text-[24px] leading-[30px] font-semibold text-[#1e1d1d]">
          {isEditing ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          ) : (
            formData.name
          )}
        </h2>
        <p className="text-[#008CFF] text-[16px] mb-2">
          {isEditing ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 text-[#008CFF]"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
            />
          ) : (
            formData.role
          )}
        </p>
        
        <div className="flex flex-wrap gap-2 text-[12px] items-center">
          <p className="flex items-center gap-2 min-w-fit">
            <MdPhone className="text-grey-500 shrink-0" />
            {isEditing ? (
              <input
                className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[120px]"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            ) : (
              formData.phone
            )}
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaEnvelope className="text-grey-500 shrink-0" />
            {isEditing ? (
              <input
                className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[180px]"
                value={formData.email}
                type="email"
                onChange={(e) => handleChange('email', e.target.value)}
              />
            ) : (
              formData.email
            )}
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaGithub className="text-grey-500 shrink-0" />
            {isEditing ? (
              <input
                className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[150px]"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
              />
            ) : (
              <a href={formData.github} target="_blank" className="hover:underline">
                {formData.github.replace("https://", "")}
              </a>
            )}
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaMapMarkerAlt className="text-grey-500 shrink-0" />
            {isEditing ? (
              <input
                className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[150px]"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
              />
            ) : (
              formData.location
            )}
          </p>
        </div>
      </div>

      {isEditing && (
        <div className="absolute right-0 -top-10 flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
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

export default Header;
