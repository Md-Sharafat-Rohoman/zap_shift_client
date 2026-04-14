import React from 'react'
import Banner from '../Banner/Banner'
import Workflow from '../workflow/Workflow'
import Brands from '../Brands/Brands'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import Reviews from '../Reviews/Reviews'
import FaqData from '../FaqData/FaqData'

const reviewsPromise = fetch("/reviews.json").then(res => res.json())

export default function Home() {
    return (
        <div>
            <Banner />
            <Workflow />
            <Brands />
            <FeaturesSection />
            <Reviews reviewsPromise={reviewsPromise} />
            <FaqData />
        </div>
    )
}
