import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import "./LoginPage.scss";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';
export default function LoginPage({client}){
    const {session} = useContext(UserContext);
    if(session){
        return(
            <main className='login'>
                <h1 className='login__title'>You are logged in!</h1>
                <Link className='login__link' to={"/resume"}>click here to upload your resume</Link>
            </main>
        )
    }
    return(
        <main className='login'>
            <Auth 
                supabaseClient={client}
                redirectTo="http://localhost:3000/resume"
                appearance={{ 
                    theme: ThemeSupa,
                    variables:{
                        default:{
                            colors:{
                                brand: '#00B4D8',
                                brandAccent: "#03045E"
                            },
                            radii: {
                                borderRadiusButton: '20px',
                                buttonBorderRadius: '20px',
                                inputBorderRadius: '20px',
                            }
                        }
                    }
                }}
                providers={['google', 'github', 'linkedin_oidc']}
                
            />
        </main>
    )
}