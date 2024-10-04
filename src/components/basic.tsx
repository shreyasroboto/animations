import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Basic() {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto max-w-6xl size-full space-y-4">
      {/* on load */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-500 size-20 rounded"
      />
      {/* spring animation */}
      <motion.div
        animate={{
          x: 400,
          transition: { type: "spring", duration: 2, bounce: 0.5 },
        }}
        className="bg-blue-500 size-20 rounded"
      />
      {/* ease animation */}
      <motion.div
        animate={{
          x: 400,
          transition: { duration: 4, ease: "easeOut" },
        }}
        className="bg-blue-500 size-20 rounded"
      />
      {/* animatePresence which removes the element from the dom */}
      <button onClick={() => setShow(!show)} className="btn-outline">
        Toggle AnimatePresence
      </button>
      <AnimatePresence mode="wait" initial={false}>
        <div className="h-20">
          {show ? (
            <motion.div
              key={show ? "show" : "hide"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              className="bg-green-500 size-20 rounded"
            />
          ) : (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              empty space here just to maintain space
            </motion.span>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
