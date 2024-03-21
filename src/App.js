import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
