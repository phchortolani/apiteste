import { useContext } from 'react';
import { AuthContext, AuthProvider } from '../../context/Auth2Context';

export default function Home() {
    const { login } = useContext(AuthContext);
    return (
        <AuthProvider>
            <div>
                Home - {login}
            </div>
        </AuthProvider>
    )
     
}
