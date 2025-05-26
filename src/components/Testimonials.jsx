import { TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Testimonials
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 rounded-2xl p-6 shadow-md hover:shadow-purple-500 transition-all duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-white text-center">
              {testimonial.name}
            </h3>
            <p className="text-sm tracking-wide text-purple-400 text-center mb-3">
              {testimonial.company}
            </p>
            <p className="text-sm italic text-neutral-300 text-center">
              "{testimonial.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
