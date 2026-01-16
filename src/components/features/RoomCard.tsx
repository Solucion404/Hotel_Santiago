import React from 'react';
import { Wifi, Tv, Wind, Wine, Coffee, Bath, BedDouble, Layout } from 'lucide-react';
import { Button } from '../ui/Button';

interface RoomCardProps {
    title: string;
    price: string;
    image: string;
    features: string[];
    priceDetails?: string;
}

const featureIcons: Record<string, React.ReactNode> = {
    "Wifi": <Wifi className="w-4 h-4" />,
    "TV": <Tv className="w-4 h-4" />,
    "Ducha": <Bath className="w-4 h-4" />,
    "2 Camas": <BedDouble className="w-4 h-4" />,
    "Cama King": <BedDouble className="w-4 h-4" />,
    "Frigobar": <Wine className="w-4 h-4" />,
    "Sala de estar": <Layout className="w-4 h-4" />,
    "Clima": <Wind className="w-4 h-4" />,
    "Cafetera": <Coffee className="w-4 h-4" />,
};

export const RoomCard: React.FC<RoomCardProps> = ({ title, price, image, features, priceDetails }) => {
    return (
        <div className="group cursor-pointer">
            <div className="rounded-xl mb-6 shadow-md h-72 bg-neutral-800 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <div className="flex justify-between items-end mb-4 gap-2">
                <h3 className="font-serif text-xl font-bold leading-tight">{title}</h3>
                <div className="text-right flex-shrink-0">
                    <span className="text-gold font-serif text-xl block leading-none">{price}</span>
                    <small className="block text-[9px] text-gray-500 font-sans font-bold uppercase mt-1">
                        {priceDetails || "POR NOCHE"}
                    </small>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 min-h-[60px]">
                {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-gray-500 text-xs">
                        <span className="text-gold/80">{featureIcons[feature] || <Wifi className="w-4 h-4" />}</span>
                        <span className="truncate">{feature}</span>
                    </div>
                ))}
            </div>
            <Button variant="dark" className="w-full py-3 rounded-lg text-xs font-bold">
                RESERVAR AHORA
            </Button>
        </div>
    );
};
