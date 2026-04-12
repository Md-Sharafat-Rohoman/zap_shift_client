import React from 'react'
import Banner from '../Banner/Banner'
import Workflow from '../workflow/Workflow'
import Brands from '../Brands/Brands'
import FeaturesSection from '../FeaturesSection/FeaturesSection'

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <Workflow></Workflow>
            <Brands></Brands>
            <FeaturesSection></FeaturesSection>
        </div>
    )
}
