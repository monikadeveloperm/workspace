"use client";
import { useState } from "react";
import EditableSection from "./components/EditableSection";
import { sections as initialSections } from "../data/sections";

export default function HomePage() {
  const [sections, setSections] = useState(initialSections);

  // Simulate admin role
  const isAdmin = true; // Change to false to test as a normal user

  const handleSave = (updatedSections) => {
    setSections(updatedSections); // Update state with new sections
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Editable Sections</h1>
      {sections.map((section) => (
        <EditableSection
          key={section.id}
          section={section}
          isAdmin={isAdmin}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}
