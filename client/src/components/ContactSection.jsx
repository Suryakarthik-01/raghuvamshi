"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const containerControls = useAnimation();
  const circleControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const runSequence = async () => {
        await containerControls.start("visible");
        await circleControls.start("visible");
        await textControls.start("visible");
      };

      runSequence();
    }
  }, [circleControls, containerControls, isInView, textControls]);

  // White container slide-up
  const containerVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Smooth drop + bounce
  const dropVariant = {
    hidden: { y: -150, opacity: 0, scale: 1.05 },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        type: "spring",
        stiffness: 140,
        damping: 14,
        mass: 0.7,
        bounce: 0.35,
        duration: 1,
      },
    }),
  };

  // Fade-in for text
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="h-screen w-screen bg-[#002b69] flex items-center justify-center overflow-hidden">
      {/* White container */}
      <motion.div
        ref={sectionRef}
        variants={containerVariant}
        initial="hidden"
        animate={containerControls}
        className="bg-white w-[85%] h-[80%] relative flex items-center justify-between overflow-hidden shadow-2xl pr-16 pl-0"
      >
        {/* LEFT SIDE - Circles */}
        <div className="relative w-1/2 h-full">
          {/* Bottom Left Circle */}
          <motion.img
            src="/team3.jpg"
            alt="person3"
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={0}
            initial="hidden"
            animate={circleControls}
          />

          {/* Bottom Right Circle */}
          <motion.img
            src="/team4.webp"
            alt="person4"
            className="absolute bottom-0 left-[12rem] w-64 h-64 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={0.2}
            initial="hidden"
            animate={circleControls}
          />

          {/* Top Left Circle */}
          <motion.img
            src="/team1.webp"
            alt="person1"
            className="absolute bottom-[12rem] left-0 w-36 h-36 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={0.4}
            initial="hidden"
            animate={circleControls}
          />

          {/* Top Right Circle */}
          <motion.img
            src="/team2.jpg"
            alt="person2"
            className="absolute bottom-[14.5rem] left-[8.5rem] w-44 h-44 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={0.6}
            initial="hidden"
            animate={circleControls}
          />
        </div>

        {/* RIGHT SIDE - Text */}
        <div className="w-1/2 flex flex-col justify-center items-start space-y-6">
          <motion.h2
            className="text-5xl font-extrabold leading-tight tracking-tight text-[#002b69]"
            variants={fadeVariant}
            custom={0}
            initial="hidden"
            animate={textControls}
          >
            Let’s build something
            <span className="block text-[#001a46]">remarkable together.</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-xl max-w-lg leading-relaxed font-medium"
            variants={fadeVariant}
            custom={0.25}
            initial="hidden"
            animate={textControls}
          >
            Share your vision and we’ll craft the strategy, design, and delivery to make it real—reach out and our team will connect with you right away.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
