import { motion } from "motion/react";
import { useRef } from "react";
import { useAnimationFrame } from "motion/react";

import image1 from "../../assets/a-team.jpg";
import image2 from "../../assets/b-team.jpg";

const Banner = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  // Floating Animations
  useAnimationFrame((t) => {
    if (imgRef1.current) {
      const y = Math.sin(t / 1500) * 20;
      imgRef1.current.style.transform = `translateY(${y}px)`;
    }

    if (imgRef2.current) {
      const x = Math.sin(t / 800) * 15;
      imgRef2.current.style.transform = `translateX(${x}px)`;
    }
  });

  return (
    <div className="min-h-screen bg-base-200 flex items-center px-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full">
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{ x: 20, color: ["#ef4444", "#3b82f6", "#22c55e"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl md:text-5xl font-extrabold leading-snug"
          >
            Latest Job <span className="text-primary">For You!</span>
          </motion.h1>
          <p className="py-6 text-base md:text-lg text-gray-600">
            Find your dream job today. Thousands of opportunities are waiting
            for you. Start your journey with us and get connected to the best
            companies.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 relative flex justify-center items-start">
          {/* First Image */}
          <img
            ref={imgRef1}
            src={image1}
            alt="Job Banner 1"
            className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] 
                       border-blue-500 border-l-4 border-b-4 shadow-2xl 
                       absolute top-0 left-16 z-20"
          />

          {/* Second Image */}
          <img
            ref={imgRef2}
            src={image2}
            alt="Job Banner 2"
            className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] 
                       border-blue-500 border-l-4 border-b-4 shadow-2xl 
                       absolute top-24 left-40 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
