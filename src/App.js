import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import TailorPage from './pages/TailorPage/TailorPage';
import './App.scss';
import './styles/partials/global.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect, createContext } from 'react'
import { createClient } from '@supabase/supabase-js'

import LoginPage from './pages/LoginPage/LoginPage';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_SUPABASE_API_KEY);
export const UserContext = createContext();


function App() {
  
  const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

  return (
    <div className="app">
      <UserContext.Provider value={session}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/login' element={<LoginPage client={supabase} session={session}/>}/>
            
            <Route path="/resume" element={<ResumePage />} />
            <Route path='/tailor' element={<TailorPage />}/>
          </Routes>
          
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
