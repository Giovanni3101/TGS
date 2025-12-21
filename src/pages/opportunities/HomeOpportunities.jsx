import React from 'react'
import HeroSection from '../../components/opportunities/HeroSection'
import TypeOppSection from '../../components/opportunities/TypeOppSection'
import Steps from '../../components/opportunities/Steps'
import FeaturedOpportunities from '../../components/opportunities/FeaturedOpportunities'
import ContactSection from '../../components/opportunities/ContactSection'

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