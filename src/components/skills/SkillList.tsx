import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SkillList = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            {children}
        </motion.div>
    );
}