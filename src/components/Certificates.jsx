import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications & Achievements
      </motion.h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-6 shadow hover:shadow-purple-600 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white">
              {cert.title}
            </h3>
            <p className="text-sm text-purple-400">
              {cert.issuer} • {cert.year}
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;