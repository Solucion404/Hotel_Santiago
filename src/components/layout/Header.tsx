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
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-[max(1.5rem,env(safe-area-inset-top))]"
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
                <a
                    href="https://wa.me/529191478756?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20reserva%20en%20Hotel%20Santiago."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-5 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-[#1da851] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white relative bottom-[0.5px]"
                    >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    RESERVAR
                </a>
            </nav>
        </motion.div>
    );
};
