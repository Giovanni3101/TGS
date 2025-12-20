import HeroSection from '../../../components/tgs/home/heroSection';
import MissionBanner from '../../../components/tgs/home/MissionBanner';
import AboutSection from '../../../components/tgs/home/AboutSection';
import ContactBanner from '../../../components/tgs/home/ContactBanner';
import ProjectsSection from '../../../components/tgs/home/ProjectsSection';
import PartenerSection from '../../../components/tgs/home/PartenerSection';
import Testimony from '../../../components/tgs/home/Testimony';
import TextBanner from '../../../components/tgs/home/TextBanner';

function HomeTgs() {
    return (
        <div className="w-full min-h-screen bg-white">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <PartenerSection />
            <MissionBanner />
            <Testimony />
            <TextBanner />
            <div className='px-5 py-10'>
                <ContactBanner />
            </div>
        </div>
    );
}

export default HomeTgs;