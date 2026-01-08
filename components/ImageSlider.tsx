"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full h-60 rounded-md overflow-hidden bg-white group">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          //   For mobile
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 50) prev();
            if (info.offset.x < -50) next();
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-contain hover:scale-[1.02]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls (desktop hover) */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex ">
            <div className="w-1/2 group/leftSlider " onClick={prev}>
              <button
                // onClick={prev}
                className="flex absolute left-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow  group-hover/leftSlider:text-off-blue group-hover/leftSlider:shadow-lg group-hover/leftSlider:scale-105 transition-transform duration-200"
              >
                <ChevronLeft size={16} />
              </button>
            </div>

            <div className="w-1/2 group/rightSlider" onClick={next}>
              <button
                // onClick={next}
                className="flex absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow group-hover/rightSlider:text-off-blue  group-hover/rightSlider:shadow-lg group-hover/rightSlider:scale-105 transition-transform duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-1 right-1 text-[10px] bg-black/60 text-white px-1 rounded">
            {index + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}
