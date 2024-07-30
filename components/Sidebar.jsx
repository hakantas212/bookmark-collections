"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

const Sidebar = ({
  collections,
  onRename,
  onSelectCollection,
  selectedCollectionId,
  editingId,
  editName,
  setEditName,
  handleEdit,
  handleSave,
}) => {
  return (
    <div className="h-screen bg-gray-100 p-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Collections</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedCollectionId === collection.id
                  ? "bg-blue-100 shadow-md"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => onSelectCollection(collection.id)}
            >
              <div className="flex items-center justify-between mb-2">
                {editingId === collection.id ? (
                  <Input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full mr-2"
                    onBlur={() => handleSave(collection.id, editName)}
                  />
                ) : (
                  <span className="font-medium text-gray-800 truncate">
                    {collection.name}
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    editingId === collection.id
                      ? handleSave(collection.id, editName)
                      : handleEdit(collection.id, collection.name);
                  }}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  {editingId === collection.id ? "Save" : "Edit"}
                </Button>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{collection.createdAt}</span>
                <span className="bg-gray-200 text-gray-600 rounded-full py-1 px-3">
                  {collection.documentCount} document
                  {collection.documentCount !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
