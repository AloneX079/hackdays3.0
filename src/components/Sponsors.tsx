import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Example sponsor logos (replace with actual sponsor URLs)
  const sponsors = Array(8).fill('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300');

  return (
    <div className="py-16 bg-gray-800" id="sponsors">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Our Sponsors
          </span>
        </motion.h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-48 h-48 mx-4 bg-white rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}