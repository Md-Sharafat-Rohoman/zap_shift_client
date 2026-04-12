import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
// নিচের লাইনটি অবশ্যই যোগ করতে হবে (পাথটি চেক করে নিন)
import steps from '../../../data/products'; 

export default function Workflow() {
    return (
        <section className="py-16 px-6 bg-[#f3f4f6] rounded-lg">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#00302d] mb-10">
                    How it Works
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* এখন steps.map কাজ করবে */}
                    {steps && steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow"
                        >
                            {/* Icon Container */}
                            <div className="mb-6">
                                <CiDeliveryTruck className="w-10 h-10 text-[#00302d]" />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-lg font-bold text-[#00302d] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}