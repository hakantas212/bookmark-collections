"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainComponent from "../components/MainComponent";
import { staticCollections } from "../staticCollections";

const Page = () => {
  const [collections, setCollections] = useState(staticCollections || []);
  const [selectedCollectionId, setSelectedCollectionId] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const handleRename = (id, newName) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.id === id ? { ...collection, name: newName } : collection
      )
    );
    setEditingId(null);
  };
  const handleSelectCollection = (id) => {
    setSelectedCollectionId(id);
  };
  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };
  const selectedCollection = collections.find(
    (c) => c.id === selectedCollectionId
  ) || { bookmarks: [] };
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-3">
        <Sidebar
          collections={collections}
          onRename={handleRename}
          onSelectCollection={handleSelectCollection}
          selectedCollectionId={selectedCollectionId}
          editingId={editingId}
          editName={editName}
          setEditName={setEditName}
          handleEdit={handleEdit}
          handleSave={handleRename}
        />
      </div>
      <div className="col-span-7">
        <MainComponent selectedCollection={selectedCollection} />
      </div>
    </div>
  );
};
export default Page;
