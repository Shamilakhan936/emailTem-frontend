"use client";
import { useState } from "react";

const Summary = () => {
  const [title, setTitle] = useState("SUMMARY");
  const [description, setDescription] = useState(
    "I am a passionate Frontend Developer with a strong background in designing and implementing user-friendly web interfaces. My experience encompasses collaborating effectively with UX/UI designers, ensuring cross-browser compatibility, and mentoring teams to achieve high-quality outcomes. I am committed to continuous improvement and delivering scalable frontend solutions."
  );

  const [editingField, setEditingField] = useState<string | null>(null);

  return (
    <section className="rounded-lg my-4">
      {/* Title */}
      {editingField === "title" ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-xl font-semibold text-gray-900 border border-gray-300 rounded p-1 w-full"
        />
      ) : (
        <h2
          className="text-xl font-semibold text-gray-900 cursor-pointer"
          onClick={() => setEditingField("title")}
        >
          {title}
        </h2>
      )}

      <hr className="border-t-2 border-black mt-1" />

      {/* Description */}
      {editingField === "description" ? (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={() => setEditingField(null)}
          autoFocus
          className="text-gray-900 mt-2 border border-gray-300 rounded p-1 w-full"
          rows={4}
        />
      ) : (
        <p
          className="text-gray-600 mt-2 cursor-pointer"
          onClick={() => setEditingField("description")}
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default Summary;
