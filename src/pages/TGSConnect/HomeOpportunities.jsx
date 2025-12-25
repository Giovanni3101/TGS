import React from 'react'
import HeroSection from '../../components/TGSConnect/home/HeroSection'
import TypeOppSection from '../../components/TGSConnect/home/TypeOppSection'
import Steps from '../../components/TGSConnect/home/Steps'
import FeaturedOpportunities from '../../components/TGSConnect/home/FeaturedOpportunities'
import ContactSection from '../../components/TGSConnect/home/ContactSection'
import ServiceSection from '../../components/TGSConnect/home/ServiceSection'

function HomeOpportunities() {
    return (
        <div className='w-full h-full'>
            <HeroSection />
            <TypeOppSection />
            <ServiceSection />
            <Steps />
            <FeaturedOpportunities />
            <ContactSection />
        </div>
    )
}

export default HomeOpportunities