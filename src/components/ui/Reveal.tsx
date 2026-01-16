import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    key?: React.Key;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0.2, className = "" }) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};
