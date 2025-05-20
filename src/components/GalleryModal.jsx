import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const GalleryModal = ({ isOpen, onClose, media }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white/80 rounded-lg p-10 max-w-6xl w-full relative z-50"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-black text-2xl font-bold hover:text-red-600 transition"
          >
            &times;
          </button>

          {/* Media gallery */}
          <div className="flex overflow-x-scroll gap-4 py-4">
            {media.map((item, idx) =>
              item.endsWith(".mp4") ? (
                <video
                  key={idx}
                  src={item}
                  controls
                  className="w-[500px] h-[320px] object-cover rounded shadow-md"
                />
              ) : (
                <img
                  key={idx}
                  src={item}
                  alt={`gallery-${idx}`}
                  className="w-[500px] h-[320px] object-cover rounded shadow-md"
                />
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
