import React, { useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card({ image, title, subtitle, link }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [liked, setLiked] = useState(false); // State to track like status

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

    if (contentRef.current) {
      contentRef.current.style.transform = `translateZ(${50 + Math.abs(x) * 5}px)`;
    }

    if (imageRef.current) {
      imageRef.current.style.transform = `translateZ(${100 + Math.abs(x) * 10}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";

    if (contentRef.current) {
      contentRef.current.style.transform = "translateZ(50px)";
    }

    if (imageRef.current) {
      imageRef.current.style.transform = "translateZ(100px)";
    }
  };

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked); // Toggle like status
  };

  return (
    <div
      className="py-20 flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300 ease-linear group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={contentRef}
          className="text-xl font-bold text-neutral-600 dark:text-white"
          style={{ transform: "translateZ(50px)" }}
        >
          {title}
        </div>
        <p
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          style={{ transform: "translateZ(60px)" }}
        >
          {subtitle}
        </p>
        <div
          ref={imageRef}
          className="w-full mt-4"
          style={{ transform: "translateZ(100px)" }}
        >
          <img
            src={image}
            alt="Card visual"
            className="h-60 w-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex justify-between items-center mt-20">
          {link && (
            <a
              href={link}
              target="__blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              style={{ transform: "translateZ(20px)" }}
            >
              Try now →
            </a>
          )}
          <div
            onClick={toggleLike}
            className="cursor-pointer"
            style={{ transform: "translateZ(20px)" }}
          >
            {liked ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-400 text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
