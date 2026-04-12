import React from 'react';
import liveTracking from "../../../assets/live-tracking.png"
import safeDelivery from "../../../assets/safe-delivery.png"

const FeaturesSection = () => {
    const features = [
        {
            id: 1,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: liveTracking
        },
        {
            id: 2,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDelivery
        },
        {
            id: 3,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
            image: safeDelivery
        }
    ];

    return (
        <section className="py-12 px-4 md:px-8 bg-[#f3f4f6] rounded-lg">
            <div className="max-w-6xl mx-auto space-y-6">
                {features.map((feature) => (
                    <div 
                        key={feature.id}
                        className="bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className="w-48 md:w-full max-w-[200px] object-contain"
                            />
                        </div>

                        {/* Divider Line */}
                        <div className="hidden md:block w-[1px] h-24 border-l border-dashed border-gray-300 mx-4"></div>

                        {/* Text Content Section */}
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-[#00302d] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;