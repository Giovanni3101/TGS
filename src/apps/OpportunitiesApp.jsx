import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Footer from '../components/opportunities/Footer'
import HomeOpportunities from "../pages/Opportunities/HomeOpportunities";
import Opportunities from "../pages/Opportunities/Opportunities";
import Navbar from "../components/opportunities/Navbar";

function OpportunitiesApp() {
    return (
        <Router>
            <Navbar />
            <div className='flex flex-col items-center min-h-screen'>
                <main className='w-full'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<HomeOpportunities />} />
                        <Route path="/opportunities" element={<Opportunities />} />
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