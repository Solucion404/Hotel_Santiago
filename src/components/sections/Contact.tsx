import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
    honeypot: z.string().max(0, { message: "Spam detected" }).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        if (data.honeypot) return; // Silent fail for bots

        setStatus('loading');
        // Simulating API call
        setTimeout(() => {
            setStatus('success');
            reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section className="py-24 px-6 bg-bone scroll-mt-32" id="contacto">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-10">
                        <div>
                            <h2 className="font-serif text-4xl font-bold mb-6">Contáctanos</h2>
                            <p className="text-gray-600">Estamos aquí para hacer de tu estancia una experiencia inolvidable. Escríbenos o visítanos.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-gold"><MapPin /></span>
                            <div>
                                <h4 className="font-bold">Dirección</h4>
                                <p className="text-gray-600">29930, Central Nte., Centro, Yajalón, Chis.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-gold" />
                            <div>
                                <h4 className="font-bold">Correo</h4>
                                <p className="text-gray-600">hotelsantiago53@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-gold" />
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-bold">WhatsApp</h4>
                                    <a
                                        href="https://wa.me/529191478756?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20reserva%20en%20Hotel%20Santiago."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gold transition-colors"
                                    >
                                        +52 (919) 147 8756
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-bold">Teléfono Fijo</h4>
                                    <a
                                        href="tel:9196740844"
                                        className="text-gray-600 hover:text-gold transition-colors"
                                    >
                                        (919) 67 40844
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Honeypot */}
                            <input
                                type="text"
                                {...register('honeypot')}
                                className="opacity-0 absolute -z-10"
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Nombre</label>
                                    <input
                                        {...register('name')}
                                        className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                                        type="text"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email</label>
                                    <input
                                        {...register('email')}
                                        className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                                        type="email"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Mensaje</label>
                                <textarea
                                    {...register('message')}
                                    className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                                    rows={4}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-wine text-white py-4 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg disabled:opacity-50"
                            >
                                {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center font-bold">¡Mensaje enviado con éxito!</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
