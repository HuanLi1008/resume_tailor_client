import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
