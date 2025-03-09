"use client";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Standard icons
const Header: React.FC = () => {
  const [name, setName] = useState("SHAMILA KHAN");
  const [role, setRole] = useState("Experienced FRONTEND DEVELOPER | UI/UX Designer");
  const [phone, setPhone] = useState("+92 355 433 0721");
  const [email, setEmail] = useState("shamilak936@gmail.com");
  const [address, setAddress] = useState("Talibshah house near Heli chock GLT");

  const [editingField, setEditingField] = useState<"name" | "role" | "phone" | "email" | "address" | null>(null);

  const contactFields = [
    { field: "phone", value: phone, setValue: setPhone, icon: <FiPhone /> },
    { field: "email", value: email, setValue: setEmail, icon: <FiMail /> },
    { field: "address", value: address, setValue: setAddress, icon: <FiMapPin /> },
  ];

  return (
    <header className="rounded-t-xl flex flex-col md:flex-row items-center gap-6">
      {/* User Info */}
      <div className="flex flex-col text-center md:text-left">
        {/* Name */}
        {editingField === "name" ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
            className="text-3xl font-semibold text-black border border-gray-300 rounded p-2 w-full"
          />
        ) : (
          <h1 className="text-3xl font-semibold text-black cursor-pointer" onClick={() => setEditingField("name")}>
            {name}
          </h1>
        )}

        {/* Role */}
        {editingField === "role" ? (
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            onBlur={() => setEditingField(null)}
            autoFocus
            className="text-lg text-blue-600 border border-gray-300 rounded p-2 w-full"
          />
        ) : (
          <p className="text-lg text-blue-600 cursor-pointer" onClick={() => setEditingField("role")}>
            {role}
          </p>
        )}

        {/* Contact Information */}
        <div className="flex flex-col gap-2 mt-2">
          {contactFields.map(({ field, value, setValue, icon }) => (
            <div key={field} className="flex items-center gap-2 text-black cursor-pointer">
              {icon}
              {editingField === field ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="border border-gray-300 rounded p-2 w-full"
                />
              ) : (
                <span onClick={() => setEditingField(field as "phone" | "email" | "address")}>
                  {value || "N/A"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
