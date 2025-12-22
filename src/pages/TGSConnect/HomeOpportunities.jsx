import React from 'react'
import HeroSection from '../../components/TGSConnect/home/HeroSection'
import TypeOppSection from '../../components/TGSConnect/home/TypeOppSection'
import Steps from '../../components/TGSConnect/home/Steps'
import FeaturedOpportunities from '../../components/TGSConnect/home/FeaturedOpportunities'
import ContactSection from '../../components/TGSConnect/home/ContactSection'

function HomeOpportunities() {
    return (
        <div className='w-full h-full'>
            <HeroSection />
            <TypeOppSection />
            <Steps />
            <FeaturedOpportunities />
            <ContactSection />
        </div>
    )
}

export default HomeOpportunities