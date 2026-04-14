import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from 'react-icons/fi';

const faqData = [
    {
        question: "How does this posture corrector work?",
        answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer: "Yes, our product is designed with adjustable straps to accommodate various body sizes and ages comfortably."
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer: "Absolutely. Consistent use helps retrain your muscles and spine to return to their natural alignment, reducing strain and pain."
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer: "Some of our premium models include smart sensors that vibrate when they detect slouching."
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer: "You can sign up for our newsletter or click the 'Notify Me' button on the product page to get an instant email alert."
    }
];

export default function FaqData() {
    const [openIndex, setOpenIndex] = useState(0); 

    return (
        <section className="bg-[#f0f2f5] py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#00302d] mb-4">
                        Frequently Asked Question (FAQ)
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? 'bg-[#e0f2f1] border border-[#26a69a]'
                                    : 'bg-white border border-transparent shadow-sm'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex justify-between items-center p-5 text-left transition-colors"
                            >
                                <span className={`font-bold ${openIndex === index ? 'text-[#00302d]' : 'text-[#00302d]'}`}>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <FiChevronUp className="text-[#26a69a] text-xl" />
                                ) : (
                                    <FiChevronDown className="text-gray-400 text-xl" />
                                )}
                            </button>

                            {/* Answer Area */}
                            <div
                                className={`px-5 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <p className="text-gray-600 text-sm leading-relaxed border-t border-[#b2dfdb] pt-4">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="mt-10 flex justify-center">
                    <button className="flex items-center gap-2 group">
                        <span className="bg-[#c5e1a5] text-[#00302d] font-bold py-3 px-8 rounded-full transition-transform group-hover:scale-105">
                            See More FAQ's
                        </span>
                        <div className="bg-[#1a1a1a] text-white p-3 rounded-full transition-transform group-hover:rotate-45">
                            <FiArrowUpRight size={24} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}