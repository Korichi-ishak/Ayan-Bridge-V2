import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import StudioPage from './pages/StudioPage';
import LearnHubPage from './pages/LearnHubPage';
import InvestorClubPage from './pages/InvestorClubPage';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/learn" element={<LearnHubPage />} />
          <Route path="/invest" element={<InvestorClubPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
