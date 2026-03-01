import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface PhilosophyContentProps {
    title: string;
    subtitle: string;
    description: string;
    mainImage: string;
    secondaryImage: string;
    items: Array<{
        icon: string;
        label: string;
        text: string;
    }>;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const imageLeftVariants: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
    }
};

const imageRightVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }
    }
};

export const PhilosophyContent: React.FC<PhilosophyContentProps> = ({
    title,
    subtitle,
    description,
    mainImage,
    secondaryImage,
    items
}) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
            {/* TEXT SIDE */}
            <div className="space-y-10 order-2 lg:order-1 relative">
                <div className="space-y-4">
                    <motion.span
                        variants={itemVariants}
                        className="text-gold font-bold tracking-[0.4em] text-xs uppercase block"
                    >
                        {title}
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black max-w-xl relative z-10"
                    >
                        {subtitle}
                    </motion.h2>

                    {/* Floating Signature detail */}
                    <motion.span
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: -5 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute top-12 -left-4 font-['Great_Vibes'] text-7xl lg:text-8xl text-gold/10 pointer-events-none select-none -translate-y-1/2"
                    >
                        Tradición
                    </motion.span>
                </div>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-lg leading-relaxed font-light max-w-lg"
                >
                    {description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="space-y-3 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-2xl transform transition-transform group-hover:scale-110 duration-500">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-black group-hover:text-gold transition-colors duration-300">
                                {item.label}
                            </h4>
                            <p className="text-sm text-gray-500 line-clamp-2">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* VISUAL COLLAGE SIDE */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                {/* Main Large Image */}
                <motion.div
                    variants={imageRightVariants}
                    className="relative w-full md:w-10/12 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white"
                >
                    <img
                        src={mainImage}
                        alt="Experiencia Santiago"
                        className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
                </motion.div>

                {/* Overlapping Secondary Image */}
                <motion.div
                    variants={imageLeftVariants}
                    style={{ y: 20 }}
                    whileHover={{ y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                    className="absolute -bottom-10 left-0 md:-left-12 w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-8 border-white z-20"
                >
                    <img
                        src={secondaryImage}
                        alt="Detalles Santiago"
                        className="w-full h-full object-cover transition-all duration-700"
                    />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    whileInView={{ opacity: 0.4, rotate: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gold/5 rounded-full blur-2xl -z-10"
                />
            </div>
        </motion.div>
    );
};
