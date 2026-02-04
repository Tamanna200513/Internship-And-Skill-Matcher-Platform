// components/HeroSection.jsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* ================= COMPONENT ================= */

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden
      bg-gradient-to-br from-[#eaf4ff] via-[#f2f8ff] to-white">

      {/* ================= MAIN CONTENT ================= */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-14 order-2 lg:order-1">
          <motion.div
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-[#1f3c88] leading-snug mb-6"
            >
              Find the Best Internship <br />
              Matches for Your Skills!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Smartly connect students with the right opportunities.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-5 flex-wrap"
            >
              <button
                onClick={() => router.push('/assessment')}
                className="px-12 py-4 bg-orange-500 hover:bg-orange-600
                  text-white font-semibold rounded-md
                  shadow-md transition"
              >
                Get Started
              </button>

              <button
                className="px-12 py-4 bg-[#1f3c88] hover:bg-[#182f6b]
                  text-white font-semibold rounded-md
                  shadow-md transition"
              >
                Explore Internships
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 order-1 lg:order-2">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://mits-interns.netlify.app/static/media/home-internship.af2eb250226e94d4e75f.png"
            alt="Internship Illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>

      {/* ================= BOTTOM CURVE ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,0 720,20 960,40 1200,80 1440,40 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}



