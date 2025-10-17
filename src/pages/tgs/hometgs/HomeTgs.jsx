import HeroSection from '../../../components/tgs/home/heroSection';
import MissionBanner from '../../../components/tgs/home/MissionBanner';
import SuccessStories from '../../../components/tgs/home/SuccessStories';
import TGSAcademy from '../../../components/tgs/home/TGSAcademy';
import ValuesSection from '../../../components/tgs/home/ValuesSection';
import ContactSection from '../../../components/tgs/home/ContactSection';

function HomeTgs() {
    return (
        <div className="w-full min-h-screen bg-white">
            <HeroSection />
            <MissionBanner />
            <SuccessStories />
            <TGSAcademy />
            <ValuesSection />
            <ContactSection />
        </div>
    );
}

export default HomeTgs;