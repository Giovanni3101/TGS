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
import LoginSignIn from "../components/TGSConnect/LogIn";
import { useEffect } from "react";

function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
        </div>
    );
}

function AuthLayout({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <main className="w-full">{children}</main>
        </div>
    );
}

function TgsAcademyApp() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<DefaultLayout><HomeOpportunities /></DefaultLayout>} />
                <Route path="/opportunities" element={<DefaultLayout><OpportunitiesPage /></DefaultLayout>} />
                <Route path="/:category/:slug" element={<DefaultLayout><OpportunityDetailPage /></DefaultLayout>} />
                <Route path="/services/growth-diagnosis" element={<DefaultLayout><GrowthDiagnosisPage /></DefaultLayout>} />
                <Route path="/services/consultations" element={<DefaultLayout><ConsultationsPage /></DefaultLayout>} />
                <Route path="/academy/goaf" element={<DefaultLayout><GOAFPage /></DefaultLayout>} />
                <Route path="/academy/gsp" element={<DefaultLayout><GSPPage /></DefaultLayout>} />


                <Route path="/login" element={<AuthLayout>  <LoginSignIn /> </AuthLayout>} />

                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    )
}

export default TgsAcademyApp