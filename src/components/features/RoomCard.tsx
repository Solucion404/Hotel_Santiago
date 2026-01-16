import React from 'react';
import { Wifi, Tv, Wind, Wine, Coffee, Bath, BedDouble } from 'lucide-react';
import { Button } from '../ui/Button';

interface RoomCardProps {
    title: string;
    price: string;
    image: string;
    features: string[];
}

const featureIcons: Record<string, React.ReactNode> = {
    "WiFi Gratis": <Wifi className="w-4 h-4" />,
    "Smart TV": <Tv className="w-4 h-4" />,
    "Clima": <Wind className="w-4 h-4" />,
    "Frigobar": <Wine className="w-4 h-4" />,
    "Cafetera": <Coffee className="w-4 h-4" />,
    "Rain Shower": <Bath className="w-4 h-4" />,
    "King Size": <BedDouble className="w-4 h-4" />,
};

export const RoomCard: React.FC<RoomCardProps> = ({ title, price, image, features }) => {
    return (
        <div className="group cursor-pointer">
            <div className="rounded-xl mb-6 shadow-md h-72 bg-neutral-800 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            </div>
            <div className="flex justify-between items-end mb-4">
                <h3 className="font-serif text-2xl font-bold">{title}</h3>
                <div className="text-right">
                    <span className="text-gold font-serif text-xl">{price}</span>
                    <small className="block text-[10px] text-gray-500 font-sans uppercase">/noche</small>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-gray-500 text-sm">
                        {featureIcons[feature] || <Wifi className="w-4 h-4" />}
                        {feature}
                    </div>
                ))}
            </div>
            <Button variant="dark" className="w-full py-3 rounded-lg">
                Reservar
            </Button>
        </div>
    );
};
