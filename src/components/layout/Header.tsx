import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Image } from "astro:assets";

interface HeaderProps {
    logo: ImageMetadata;
}

export const Header: React.FC<HeaderProps> = ({ logo }) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-150%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
        >
            <nav className="flex items-center justify-between w-full max-w-5xl bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl">
                <a href="#inicio" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-black">
                        <img
                            src={logo.src}
                            alt="Logo Hotel Santiago"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-serif font-bold text-base md:text-lg tracking-wider text-white">
                        HOTEL <span className="text-gold">SANTIAGO</span>
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a
                        className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
                        href="#habitaciones"
                    >
                        Habitaciones
                    </a>
                    <a
                        className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
                        href="#esencia"
                    >
                        Esencia
                    </a>
                    <a
                        className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
                        href="#galeria"
                    >
                        Galería
                    </a>
                    <a
                        className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
                        href="#contacto"
                    >
                        Contacto
                    </a>
                </div>
                <button className="bg-rose-950 text-white px-5 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold hover:brightness-110 transition-all shadow-md">
                    RESERVAR
                </button>
            </nav>
        </motion.div>
    );
};
