import Particles from "../components/Particles";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa'; // React Icons (Font Awesome)
import { SiTailwindcss, SiMysql, SiNextdotjs, SiJavascript } from 'react-icons/si'; // More Icons

const About = () => {
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

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-zinc-500 leading-relaxed relative"
        >
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
            My journey into web development began with <strong>FreeCodeCamp</strong>, where I started learning coding on my own, completing challenges, and building small projects that sparked my interest in technology. As I grew more confident, I decided to take my skills further and joined <strong>SOS Technical High School</strong>, where I met like-minded individuals who shared my passion. Together, we founded <strong>Chroste Labs</strong>, a space where we collaborate on innovative tech projects. Today, I’m proficient in a variety of technologies and tools that form the backbone of modern web development.
          </motion.p>

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
            I specialize in frontend development, using <strong>React</strong> to build dynamic user interfaces, while leveraging <strong>Next.js</strong> for server-side rendering and optimized performance. I’m also proficient in backend development with <strong>Node.js</strong> and <strong>PHP</strong>, and manage databases with <strong>MySQL</strong>. For styling, I use <strong>Tailwind CSS</strong>, which allows for efficient, responsive design. JavaScript is the core language that powers all my work, and I’m always learning and evolving my skills to keep up with the ever-changing tech landscape.
          </motion.p>
        </motion.div>

        {/* Tools and languages icons */}
        <div className="flex justify-center gap-6 mt-8">
          <SiTailwindcss size={40} className="text-cyan-500" title="Tailwind CSS" />
          <SiJavascript size={40} className="text-yellow-500" title="JavaScript" />
          <FaReact size={40} className="text-cyan-600" title="React" />
          <SiNextdotjs size={40} className="text-white" title="Next.js" />
          <FaNodeJs size={40} className="text-green-600" title="Node.js" />
          <SiMysql size={40} className="text-blue-600" title="MySQL" />
          <FaPhp size={40} className="text-blue-600" title="PHP" />
        </div>
      </div>
    </div>
  );
};

export default About;
