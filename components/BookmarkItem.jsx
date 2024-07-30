"use client";

import { motion } from "framer-motion";

const bookmarkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const BookmarkItem = ({ bookmark, index }) => (
  <motion.div
    variants={bookmarkVariants}
    className="bg-white p-4 rounded-lg shadow-md"
  >
    <h3 className="font-bold text-lg mb-2">{bookmark.title}</h3>
    <p className="text-gray-600">{bookmark.description}</p>
  </motion.div>
);

export default BookmarkItem;
