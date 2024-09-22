import { motion } from 'framer-motion';
import { skillsConfig } from '../../assets/skills';
import { FaHtml5 } from 'react-icons/fa';

export const SkillItem = ({ name }: { name: string }) => {
  const item = {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 }
  };

  const config = skillsConfig[name] || { icon: FaHtml5, color: 'text-gray-600', textColor: 'text-gray-800', background: 'bg-gray-100' };
  const Icon = config.icon;

  return (
      <motion.div 
          className={`rounded-xl shadow-md p-4 text-center transition h-fit min-w-28 duration-300 ease-in-out hover:shadow-lg ${config.background}`}
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
      >
          <Icon className={`text-4xl mb-2 mx-auto ${config.color}`} />
          <span className={`text-lg font-medium ${config.textColor}`}>{name}</span>
      </motion.div>
  );
}