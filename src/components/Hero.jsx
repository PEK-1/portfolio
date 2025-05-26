import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-16 lg:pb-36">
      <div className="flex flex-wrap items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
            >
              Prathyusha <span className="text-gradient">Gadi</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-2xl md:text-3xl text-transparent font-semibold mb-4"
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl py-4"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex gap-4"
            >
              <a
                href="/resume.pdf"
                download
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Download Resume
              </a>
              <a
                href="#contac"
                className="border border-purple-700 text-purple-300 hover:bg-purple-800 hover:text-white px-6 py-3 rounded-md font-medium transition"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Prathyusha Gadi"
              className="rounded-lg shadow-xl w-72 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
