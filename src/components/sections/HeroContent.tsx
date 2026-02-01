import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const HeroContent: React.FC = () => {
    const luxuryEase = [0.16, 1, 0.3, 1];

    const containerVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
                duration: 1.2,
                ease: luxuryEase
            }
        }
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: luxuryEase
            }
        }
    };

    return (
        <motion.div
            className="relative z-20 px-4 w-full max-w-4xl mx-auto flex flex-col items-center"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.h1
                variants={itemVariants}
                className="font-serif text-white text-5xl md:text-7xl font-bold mb-4 tracking-wide uppercase text-center"
            >
                HOTEL SANTIAGO
            </motion.h1>

            <motion.h2
                variants={itemVariants}
                className="font-serif text-white/90 text-xl md:text-2xl font-light italic mb-8 text-center"
            >
                Tu refugio de paz en la Selva de Chiapas
            </motion.h2>

            <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
                <a
                    href="#habitaciones"
                    className="bg-[#D98E32] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:brightness-110 transition-all text-center min-w-[200px]"
                >
                    Ver Habitaciones
                </a>

                <a
                    href="#esencia"
                    className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all text-center min-w-[200px]"
                >
                    Conócenos
                </a>
            </motion.div>
        </motion.div>
    );
};
