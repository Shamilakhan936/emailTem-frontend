"use client";

import { useState, useRef, useEffect } from "react";
import { FiEdit2, FiSave, FiX, FiPlus, FiTrash2 } from "react-icons/fi";

const Summary = () => {
  const [summaries, setSummaries] = useState([
    {
      id: Date.now(),
      text: "I am a Backend Developer with over 3 years of experience specializing in building scalable web applications using technologies like Express.js, Laravel, React.js, and Python. My expertise includes API development and optimizing backend processes. I strive to create secure and efficient systems that enhance user experience while implementing best practices in performance optimization.",
      isEditing: false,
    },
  ]);

  const [editing, setEditing] = useState(false); // Controls dark overlay
  const editRef = useRef(null);

  // Function to add a new summary
  const addNewEntry = () => {
    setSummaries([
      ...summaries,
      { id: Date.now(), text: "", isEditing: true }, // New entry starts in editing mode
    ]);
    setEditing(true);
  };

  // Function to delete a summary
  const deleteEntry = (id: number) => {
    setSummaries(summaries.filter((summary) => summary.id !== id));
  };

  // Function to update summary text
  const updateSummaryText = (id: number, newText: string) => {
    setSummaries(
      summaries.map((summary) =>
        summary.id === id ? { ...summary, text: newText } : summary
      )
    );
  };

  // Function to toggle editing mode
  const toggleEditing = (id: number, state: boolean) => {
    setSummaries(
      summaries.map((summary) =>
        summary.id === id ? { ...summary, isEditing: state } : summary
      )
    );
    setEditing(state);
  };

  // Click outside to close editing
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (editRef.current && !(editRef.current as any).contains(event.target)) {
        setSummaries(summaries.map((s) => ({ ...s, isEditing: false })));
        setEditing(false);
      }
    };

    if (editing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editing, summaries]);

  return (
    <>
      {/* Dark overlay when editing */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 z-10 transition-opacity" />
      )}

      <div
        ref={editRef}
        className="relative w-full mt-6 cursor-pointer max-w-2xl z-20"
      >
        {summaries.map((summary) => (
          <div
            key={summary.id} className={`relative transition-all mb-4 bg-white ${
                summary.isEditing ? "p-4" : ""
              }`}
            onClick={() => toggleEditing(summary.id, true)}
          >
            <h2 className="text-[16px] max-sm:font-bold border-b-[1px] border-grey-300 text-[#384347] font-normal mb-[5px]">
              SUMMARY
            </h2>

            {summary.isEditing ? (
              <textarea
                className="w-full min-h-[150px] p-4 border border-green-500 rounded text-gray-700 text-[12px] focus:outline-none resize-none overflow-hidden"
                value={summary.text}
                onChange={(e) => updateSummaryText(summary.id, e.target.value)}
                autoFocus
              />
            ) : (
              <p className="text-gray-700 text-[12px]">
                {summary.text || "Click to edit..."}
              </p>
            )}

            {/* Floating Toolbar (Appears only when editing) */}
            {summary.isEditing && (
              <div className="absolute top-[-20px] left-[30%] flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
                <button
                  className="bg-green-500 text-white px-2 py-1 flex items-center space-x-1 rounded-md hover:bg-green-600 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    addNewEntry();
                  }}
                >
                  <FiPlus size={14} />
                  <span className="text-xs">New Entry</span>
                </button>

                <button
                  className="text-red-500 p-1 hover:bg-gray-200 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteEntry(summary.id);
                  }}
                >
                  <FiTrash2 size={14} />
                </button>
                <button
                  className="text-green-500 p-1 hover:bg-gray-200 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEditing(summary.id, false);
                  }}
                >
                  <FiSave size={14} />
                </button>
                <button
                  className="text-red-500 p-1 hover:bg-gray-200 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEditing(summary.id, false);
                  }}
                >
                  <FiX size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Summary;
