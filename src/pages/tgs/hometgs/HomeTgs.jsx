import HeroSection from '../../../components/tgs/home/heroSection';
import MissionBanner from '../../../components/tgs/home/MissionBanner';
import SuccessStories from '../../../components/tgs/home/SuccessStories';
import TGSAcademy from '../../../components/tgs/home/TGSAcademy';
import ValuesSection from '../../../components/tgs/home/ValuesSection';
import ContactSection from '../../../components/tgs/home/ContactSection';
import AboutSection from '../../../components/tgs/home/AboutSection';
import ContactBanner from '../../../components/tgs/home/ContactBanner';
import ProjectsSection from '../../../components/tgs/home/ProjectsSection';
import PartenerSection from '../../../components/tgs/home/PartenerSection';

function HomeTgs() {
    return (
        <div className="w-full min-h-screen bg-white">
            <HeroSection />
            {/* <MissionBanner /> */}
            <AboutSection />
            <ProjectsSection />
            <PartenerSection />
            <div className='px-5 py-10'>
                <ContactBanner />
            </div>
            {/* <SuccessStories /> */}
            {/* <TGSAcademy /> */}
            {/* <ValuesSection /> */}
            {/* <ContactSection /> */}
        </div>
    );
}

export default HomeTgs;