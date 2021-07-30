// import App from 'next/app'
import 'tailwindcss/tailwind.css'
import './css/styles.css'
import { AuthProvider } from '../context/Auth2Context';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>            
            <Component {...pageProps} />
        </AuthProvider>
    )
}


export default MyApp