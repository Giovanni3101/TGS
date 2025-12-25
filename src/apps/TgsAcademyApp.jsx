import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Footer from '../components/TGSConnect/Footer'
import HomeOpportunities from "../pages/TGSConnect/HomeOpportunities";
import OpportunitiesPage from "../pages/TGSConnect/OpportunitiesPage";
import OpportunityDetailPage from "../pages/TGSConnect/OpportunityDetailPage";
import Navbar from "../components/TGSConnect/Navbar";
import { ScrollToTop } from "../ScrollToTop";
import GrowthDiagnosisPage from '../pages/TGSConnect/services/GrowthDiagnosisPage'
import ConsultationsPage from '../pages/TGSConnect/services/ConsultationsPage'
import GOAFPage from '../pages/TGSConnect/services/GOAFPage'
import GSPPage from "../pages/TGSConnect/services/GSPPage";

function TgsAcademyApp() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <div className='flex flex-col items-center min-h-screen'>
                <main className='w-full'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<HomeOpportunities />} />
                        <Route path="/opportunities" element={<OpportunitiesPage />} />
                        <Route path="/:category/:slug" element={<OpportunityDetailPage />} />
                        <Route path="/services/growth-diagnosis" element={<GrowthDiagnosisPage />} />
                        <Route path="/services/consultations" element={<ConsultationsPage />} />
                        <Route path="/academy/goaf" element={<GOAFPage />} />
                        <Route path="/academy/gsp" element={<GSPPage />} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default TgsAcademyApp