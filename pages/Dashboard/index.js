import { parseCookies } from 'nookies';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth2Context';
import Image from 'next/image';
import logo from '../../src/assets/images/dmlogo.png';
import Dash from '../../src/components/Dashboard/dash';
import Inscrever from '../../src/components/Inscrever/inscrever';

export default function Dashboard() {
    const { login, signOut } = useContext(AuthContext);
    const [componente, setComponente] = useState({ componente: <Dash />, desc: "Dash" });

    return (
        <div>
            <div className="wrapper">
                <div className="sidebar" data-color="orange">
                    <div className="logo">
                        <a style={{ filter: "invert(1)" }} className="simple-text logo-mini p-0">
                            <Image height="100%" width="100%" src={logo} />
                        </a>
                        <a className="simple-text logo-normal">
                            {login}
                        </a>
                    </div>
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <ul className="nav">
                            <li className={(componente.desc == "Dash" ? "active" : "")}>
                                <a onClick={() => setComponente({componente: <Dash />, desc: "Dash"})}>
                                    <i className="now-ui-icons design_app"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className={(componente.desc == "Inscrever" ? "active" : "")}>
                                <a onClick={() => setComponente({componente: <Inscrever />, desc: "Inscrever"})}>
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Cadastrar Usuário</p>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="main-panel" id="main-panel">

                    <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </button>
                                </div>
                                <a className="navbar-brand">Psico</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Menu
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                                                <li><a onClick={() => signOut()} className="dropdown-item" href="#">Sair</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="panel-header panel-header-lg">
                    </div>
                    {componente.componente}
                    <footer className="footer">
                        <div className=" container-fluid ">
                            <nav>
                                <ul>
                                    <li></li>
                                </ul>
                            </nav>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )

}
export async function getServerSideProps(ctx) {

    const { token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}