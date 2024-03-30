import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import TailorPage from './pages/TailorPage/TailorPage';
import './App.scss';
import './styles/partials/global.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

import LoginPage from './pages/LoginPage/LoginPage';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_SUPABASE_API_KEY);



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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<LoginPage client={supabase} setSession={setSession}/>}/>
          <Route path='/user' element={<CreateUserPage />}/>
          <Route path="/resume" element={<ResumePage />} />
          <Route path='/tailor' element={<TailorPage />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
