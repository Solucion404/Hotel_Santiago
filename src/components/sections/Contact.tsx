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
                                <p className="text-gray-600">29930, Central Nte. 3, Centro, Yajalón, Chis.</p>
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
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D98E32" className="mt-1">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-bold">WhatsApp</h4>
                                        <a
                                            href="https://wa.me/529191478756?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20reserva%20en%20Hotel%20Santiago."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gold transition-colors text-lg"
                                        >
                                            +52 (919) 147 8756
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-gold mt-1" />
                                    <div>
                                        <h4 className="font-bold">Teléfono Fijo</h4>
                                        <a
                                            href="tel:9196740844"
                                            className="text-gray-600 hover:text-gold transition-colors text-lg"
                                        >
                                            +52 (919) 674 0844
                                        </a>
                                    </div>
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
