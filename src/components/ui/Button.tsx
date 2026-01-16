import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-wine text-white hover:brightness-110 shadow-md',
        secondary: 'bg-gold text-white hover:bg-gold/90 shadow-xl',
        outline: 'border-2 border-white text-white hover:bg-white/10',
        dark: 'bg-dark text-white hover:bg-gold transition-colors'
    };

    return (
        <button
            className={cn(
                'px-6 py-2 rounded-full text-sm font-bold transition-all uppercase tracking-wider',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
