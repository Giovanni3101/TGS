import PageOpportunities from "../pages/Opportunities/PageOpportunities";
import Footer from '../components/opportunities/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


function OpportunitiesApp() {
    return (
        <Router>
            <div className='flex flex-col items-center min-h-screen'>
                <main className='w-full'>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<PageOpportunities />} />
                        {/* <Route path="/ambassadors" element={<Ambassadors />} /> */}
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