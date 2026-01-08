"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
};

export default function MobileSectionHeader({ title }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 md:hidden bg-off-white/90 backdrop-blur-sm ">
      <div className="py-3 max-w-6xl px-6">
        <AnimatePresence mode="wait">
          <div className="flex items-center gap-3 px-4 py-3 border-b ">
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
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
