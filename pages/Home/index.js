import { Token } from '../../auth';
import Login from '../Login/login'
function Home() {

    if (!Token().isAuthenticated) return <Login />;
    else return (<div>Home</div>);


}

export default Home;