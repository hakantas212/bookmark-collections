"use client";
import { motion } from "framer-motion";
import BookmarkItem from "./BookmarkItem";

const MainComponent = ({ selectedCollection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{selectedCollection.name}</h2>
      <motion.div
        key={selectedCollection.id} // This will re-trigger the animation on selection change
        className="grid grid-cols-1 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {(selectedCollection.bookmarks || []).map((bookmark, index) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MainComponent;
