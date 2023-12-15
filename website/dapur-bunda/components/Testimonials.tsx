'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

interface Testimonial_contain {
    id: number;
    nama_user: string;
    testimoni: string;
    date: string;
    image: string;
}

const Testimonial: React.FC = () => {
    const [posts, setPosts] = useState<Testimonial_contain[]>([]);

    useEffect(() => {
        async function fetchTestimonials() {
            const supabaseAdmin = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL || '',
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
            );

            const { data, error } = await supabaseAdmin.from('customer-testimonial').select('*');
            
            if (error) {
                console.error('Error fetching testimonials:', error.message);
                return;
            }

            if (data) {
                setPosts(data); 
            }
        }

        fetchTestimonials();
    }, []); 

    return (
        <section className="bg-gray-100 py-16 mb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-4">{testimonial.testimoni}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.nama_user}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.nama_user}</h3>
                                    <p className="text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
