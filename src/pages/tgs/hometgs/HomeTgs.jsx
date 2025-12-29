import HeroSection from '../../../components/tgs/home/heroSection';
import MissionBanner from '../../../components/tgs/home/MissionBanner';
import AboutSection from '../../../components/tgs/home/AboutSection';
import ContactBanner from '../../../components/tgs/home/ContactBanner';
import ProjectsSection from '../../../components/tgs/home/ProjectsSection';
import PartenerSection from '../../../components/tgs/home/PartenerSection';
import Testimony from '../../../components/tgs/home/Testimony';
import TextBanner from '../../../components/tgs/home/TextBanner';
import ServicesSection from '../../../components/ServicesSection';
import SeoHead from '../../../components/SeoHead.jsx';

function HomeTgs() {
    return (
        <>
            <SeoHead
                title="TGS | The Growth Sphere"
                description="Discover The Growth Sphere’s initiatives, opportunities, and impact stories empowering communities across Africa."
                ogTitle="TGS | The Growth Sphere"
                ogDescription="Discover The Growth Sphere’s initiatives, opportunities, and impact stories empowering communities across Africa."
                ogImage="/tgs1.png"
            />
            <div className="w-full min-h-screen bg-white">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <PartenerSection />
            <MissionBanner />
            <Testimony />
            <TextBanner />
            <div className='px-5 py-10'>
                <ContactBanner />
            </div>
        </div>
        </>
    );
}

export default HomeTgs;