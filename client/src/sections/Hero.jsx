import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(
    () => ["Web developer", "Solo entrepreneur", "Mobile developer", "3D Developer", "Java Enthusiast"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Switch words every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <div className="flex justify-center items-center min-h-screen pt-20">
        <div className="text-center">
          <h1 className="font-bold text-9xl duration-500 text-gray_gradient">Aim3 Kelvin</h1>
          <div className="relative h-10 flex justify-center items-center mt-4"> {/* Added margin-top */}
            {words.map((word, index) => (
              <motion.p
                key={index}
                className="absolute text-xl text-zinc-500 hover:text-zinc-300"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  wordIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -50 }
                }
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
