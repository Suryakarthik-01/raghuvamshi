"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px 0px 0px" });
  const containerControls = useAnimation();
  const circleControls = useAnimation();
  const textControls = useAnimation();
  const formControls = useAnimation();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isInView) {
      const runSequence = async () => {
        await containerControls.start("visible");
        await circleControls.start("visible");
        await textControls.start("visible");
        
        // Wait 2.5 seconds, then fade out text and show form
        await new Promise(resolve => setTimeout(resolve, 2500));
        await textControls.start("exit");
        setShowForm(true);
        await new Promise(resolve => setTimeout(resolve, 100));
        await formControls.start("visible");
      };

      runSequence();
    }
  }, [circleControls, containerControls, isInView, textControls, formControls]);

  // White container slide-up
  const containerVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Smooth natural drop with polished bounce landing
  const dropVariant = {
    hidden: { y: -500, opacity: 0, scale: 0.85, rotateZ: -5 },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        delay: delay * 0.15,
        type: "spring",
        stiffness: 85,
        damping: 22,
        mass: 1,
        bounce: 0.4,
        duration: 1.3,
      },
    }),
  };

  // Fade-in/out for text
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  // Form fade-in
  const formVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full py-20 flex items-center justify-center overflow-hidden">
      {/* Blue background backdrop */}
      <div className="absolute inset-0 bg-[#002b69] -z-10"></div>
      
      {/* White container */}
      <motion.div
        ref={sectionRef}
        variants={containerVariant}
        initial="hidden"
        animate={containerControls}
        className="bg-white w-[85%] h-[80vh] relative flex items-center justify-between overflow-hidden shadow-2xl pr-16 pl-0"
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
            custom={1}
            initial="hidden"
            animate={circleControls}
          />

          {/* Top Left Circle */}
          <motion.img
            src="/team1.webp"
            alt="person1"
            className="absolute bottom-[12rem] left-0 w-36 h-36 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={2}
            initial="hidden"
            animate={circleControls}
          />

          {/* Top Right Circle */}
          <motion.img
            src="/team2.jpg"
            alt="person2"
            className="absolute bottom-[14.5rem] left-[8.5rem] w-44 h-44 rounded-full object-cover shadow-xl filter grayscale hover:grayscale-0 transition duration-300"
            variants={dropVariant}
            custom={3}
            initial="hidden"
            animate={circleControls}
          />
        </div>

        {/* RIGHT SIDE - Text or Form */}
        <div className="w-1/2 flex flex-col justify-center items-start space-y-6 px-8">
          {!showForm ? (
            <>
              <motion.h2
                className="text-5xl font-extrabold leading-tight tracking-tight text-[#002b69]"
                variants={fadeVariant}
                custom={0}
                initial="hidden"
                animate={textControls}
              >
                Let's build something
                <span className="block text-[#001a46]">remarkable together.</span>
              </motion.h2>

              <motion.p
                className="text-gray-600 text-xl max-w-lg leading-relaxed font-medium"
                variants={fadeVariant}
                custom={0.25}
                initial="hidden"
                animate={textControls}
              >
                Share your vision and we'll craft the strategy, design, and delivery to make it real—reach out and our team will connect with you right away.
              </motion.p>
            </>
          ) : (
            <motion.div
              variants={formVariant}
              initial="hidden"
              animate={formControls}
              className="w-full max-w-md"
            >
              {/* Form Heading */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-[#002b69] mb-2">Get in Touch</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>

              <form className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white transition duration-300 shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white transition duration-300 shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Email Address</label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white transition duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Message</label>
                  <textarea
                    placeholder="Tell us about your project or inquiry..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white transition duration-300 shadow-sm hover:shadow-md resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>SEND MESSAGE</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
