"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
};

export default function MobileSectionHeader({ title }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 lg:hidden bg-background/90 backdrop-blur-sm border-b">
      {/* Inner content container */}
      <div
        className="
          mx-auto w-full
          max-w-[42rem]
          px-6 sm:px-4
        "
      >
        <div className="py-3 px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.h2
              key={title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-wide"
            >
              {title}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
