import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import "./LoginPage.scss";
export default function LoginPage({client, setSession}){

    return(
        <main className='login'>
            <Auth 
                supabaseClient={client}
                appearance={{ theme: ThemeSupa }}
                view="sign_up"
            />
        </main>
    )
}