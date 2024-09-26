import { motion } from 'framer-motion';
import { useState } from 'react';
import { CiPaperplane } from 'react-icons/ci';

interface Image {
  src: string;
  alt: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  siteLink: string;
  images: Image[]
}

export const ProjectItem = ({ title, description, siteLink, images }: ProjectItemProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      window.open(siteLink, '_blank', 'noopener,noreferrer');
      setIsClicked(false);
    }, 400);
  };

  const buttonVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05 },
    clicked: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const planeVariants = {
    hidden: { opacity: 0, x: '-50%', y: '-50%' },
    visible: { 
      opacity: 1,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.3 }
    },
    fly: {
      x: '2000%',
      y: '-50%',
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-start w-full">
        <div className="col-span-1 sticky top-0 self-start p-6">
          <div className="flex flex-col w-fit items-start justify-center">
            <div className="flex items-center justify-center mt-6 h-36 w-36 mb-4 overflow-hidden rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#0e1010]">
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-contain rounded-full transform hover:scale-105 transition-transform duration-300"/>
            </div>
          <h3 className="text-xl sm:text-5xl font-bold text-gray-800 dark:text-white">{title}</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          <div className="project-details mt-4">
          <motion.div 
      className="relative inline-block"
      initial="normal"
      whileHover="hover"
      animate={isClicked ? "clicked" : "normal"}
      variants={buttonVariants}
    >
      <motion.a 
        href={siteLink} 
        onClick={handleClick}
        className={`inline-flex items-center px-4 py-2 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 ${isClicked ? 'invisible' : 'visible'}`}
      >
        <span className="mr-2">Visit Site</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.a>
      {isClicked && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8"
          initial="hidden"
          animate={["visible", "fly"]}
          variants={planeVariants}
        >
          <CiPaperplane size={32} />
        </motion.div>
      )}
    </motion.div>
          </div>
        </div>
        <div className="col-span-1 space-y-4 sm:space-y-10 p-6">
          {images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img src={image.src} alt={image.alt} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}