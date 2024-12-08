import Particles from "../components/Particles";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent relative px-4 sm:px-6 lg:px-8">
      {/* Background particles */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Content wrapper */}
      <div className="max-w-4xl text-center space-y-6 w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Smooth easing curve
          viewport={{ once: true }}
          className="head-text"
        >
          About Me
        </motion.h2>

        {/* Text content with toggle functionality */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-zinc-500 leading-relaxed relative"
        >
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.p
                key="expanded"
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1], // Smooth fade-in/out easing
                }}
              >
                My journey into web development began with <strong>FreeCodeCamp</strong>, where I dove into coding on my own, tackling challenges and building projects that laid the foundation for my career. After gaining confidence, I took my skills further by joining <strong>SOS Technical High School</strong>, where I met two amazing classmates who shared my passion for technology. Together, we <strong>founded Chroste Labs</strong> &mdash; a space where we could collaborate on innovative projects and make our mark in the tech world.
              </motion.p>
            ) : (
              <motion.p
                key="collapsed"
                variants={paragraphVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1], // Smooth fade-in/out easing
                }}
              >
                My journey into web development began with <strong>FreeCodeCamp</strong>, where I dove into coding on my own, tackling challenges and building projects.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <Button
            onClick={() => setExpanded(!expanded)}
            title={expanded ? "Show Less" : "Read More"}
            className="mt-4"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
