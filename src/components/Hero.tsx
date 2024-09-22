import { motion } from "framer-motion";

export const Hero = ():React.ReactNode => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gray-50 dark:bg-[#0e1010]">
      <div className="w-full px-4 text-left py-8">
      <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-16 text-gray-900 dark:text-white leading-relaxed"
        >
          Hello,
          <br className="mb-2" />
          My name is Hritesh Mondal
          <br className="mb-2" />
          I am a Backend Developer from India
        </motion.h1>
        <p className="text-base sm:text-md md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          I like to craft efficient APIs, designing robust database models <br />and building scalable systems
        </p>
      </div>
    </section>
  );
}