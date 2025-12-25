import React from 'react'
import HeroSection from '../../components/TGSConnect/home/HeroSection'
import TypeOppSection from '../../components/TGSConnect/home/TypeOppSection'
import Steps from '../../components/TGSConnect/home/Steps'
import FeaturedOpportunities from '../../components/TGSConnect/home/FeaturedOpportunities'
import ContactSection from '../../components/TGSConnect/home/ContactSection'
import ServiceSection from '../../components/TGSConnect/home/ServiceSection'
import AcadmySection from '../../components/TGSConnect/home/AcadmySection'
import Testimony from '../../components/tgs/home/Testimony'

function HomeOpportunities() {
    return (
        <div className='w-full h-full'>
            <HeroSection />
            <ServiceSection />
            <AcadmySection />
            <Testimony />
            <TypeOppSection />
            <Steps />
            <FeaturedOpportunities />
            <ContactSection />
        </div>
    )
}

export default HomeOpportunities