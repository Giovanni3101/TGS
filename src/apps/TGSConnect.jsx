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
import { ScrollToTop } from "../ScrollToTop"

function OpportunitiesApp() {
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
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </main>
                <div className=''>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default OpportunitiesApp