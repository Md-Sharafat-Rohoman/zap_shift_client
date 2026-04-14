import React from 'react'

export default function ReviewsCard({ review: reviewData }) {
    const {
        userName,
        ratings,
        review,
        user_photoURL,
        date
    } = reviewData || {};

    return (
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col justify-between">
            <div>
                {/* Quote Icon */}
                <div className="mb-6">
                    <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                        <path d="M0 30V15C0 10.7 0.9 7 2.7 3.9C4.5 0.8 7 0.2 10.2 2.1L12 3.9C9.1 5.3 7.3 7 6.6 9C5.9 11 5.6 13 5.7 15H12V30H0ZM21 30V15C21 10.7 21.9 7 23.7 3.9C25.5 0.8 28 0.2 31.2 2.1L33 3.9C30.1 5.3 28.3 7 27.6 9C26.9 11 26.6 13 26.7 15H33V30H21Z" fill="#a1a1aa" />
                    </svg>
                </div>

                {/* Review Text */}
                <p className="text-[#00302d] text-base leading-relaxed mb-8 italic">
                    "{review}"
                </p>
            </div>

            <div>
                {/* Dashed Line */}
                <div className="w-full border-t border-dashed border-gray-200 mb-8"></div>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    {user_photoURL ? (
                        <img
                            src={user_photoURL}
                            alt={userName}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#003d3f]"
                        />
                    ) : (
                        <div className="w-14 h-14 rounded-full bg-[#003d3f] flex-shrink-0"></div>
                    )}

                    {/* User Info */}
                    <div className="overflow-hidden">
                        <h4 className="text-xl font-bold text-[#00302d] truncate">
                            {userName}
                        </h4>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-yellow-500 font-bold">⭐ {ratings}/5</p>
                            <span className="text-gray-300">|</span>
                            <p className="text-xs text-gray-400">
                                {date ? new Date(date).toLocaleDateString() : 'Recent'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}