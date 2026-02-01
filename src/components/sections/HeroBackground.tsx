import React from "react";
import { motion } from "framer-motion";

interface HeroBackgroundProps {
    children: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 3,
                ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute inset-0 z-0 origin-center"
        >
            {children}
        </motion.div>
    );
};
