import React, { useState, useEffect } from "react";
import { Spinner } from "./common/Spinner";
import { motion, AnimatePresence } from "framer-motion";

export function LoginButton() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout;

    if (loading) {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [loading]);

  return (
    <button
      className="btn flex justify-center items-center h-12 w-60 flex-col"
      onClick={() => setLoading(true)}
      disabled={loading}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={loading ? "loading" : "not-loading"}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0 }}
        >
          {loading ? <Spinner /> : "Send me a login link"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
