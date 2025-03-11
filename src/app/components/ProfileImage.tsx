"use client";

import { useState, useEffect, useRef } from "react";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import Image from "next/image";

const ProfileImage = () => {
  const [image, setImage] = useState("/images/profile.jpeg"); // Default image path updated
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        localStorage.setItem('profileImage', base64String);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    // Slight delay to ensure the input is rendered
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 100);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="relative w-[115px] h-[115px] mx-auto mb-4">
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Profile picture of Abdul Rashid Khan"
          width={115}
          height={115}
          className="w-full h-full object-cover"
        />
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {isEditing && (
        <div className="absolute right-0 -top-10 flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
          <button
            className="text-red-500 p-1 hover:bg-gray-200 rounded"
            onClick={handleCancel}
          >
            <FiX size={14} />
          </button>
        </div>
      )}

      {!isEditing && (
        <button
          className="absolute bottom-1 right-1 p-1.5 bg-white rounded-full shadow-md text-gray-600 hover:text-gray-800"
          onClick={handleEditClick}
        >
          <FiEdit2 size={16} />
        </button>
      )}
    </div>
  );
};

export default ProfileImage;
