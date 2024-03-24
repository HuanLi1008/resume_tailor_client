import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import './App.scss';
import './styles/partials/global.scss';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import TailorPage from './pages/TailorPage/TailorPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/user' element={<CreateUserPage />}/>
          <Route path="/resume" element={<ResumePage />} />
          <Route path='/tailor' element={<TailorPage />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
