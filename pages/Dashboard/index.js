import { parseCookies } from 'nookies';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth2Context';
import Image from 'next/image';
import logo from '../../src/assets/images/dmlogo.png';
import Dash from '../../src/components/Dashboard/dash';
import Inscrever from '../../src/components/Inscrever/inscrever';
import jwt from "jsonwebtoken";

export default function Dashboard(props) {
    const { login, signOut } = useContext(AuthContext);
    const [componente, setComponente] = useState({ componente: <Dash />, desc: "Dash" });
    const [navopen, setNavOpen] = useState(false);
    const [optionsopen, setOptionsOpen] = useState(false);

    return (
        <div className={"perfect-scrollbar-on " + (navopen ? "nav-open" : "")}>
            <div className="wrapper" style={{ overflowX: "hidden" }}>
                <div className="sidebar" data-color="orange">
                    <div className="logo">
                        <a style={{ filter: "invert(1)" }} className="simple-text logo-mini p-0">
                            <Image height="100%" width="100%" className="rounded-0" src={logo} />
                        </a>
                        <a className="simple-text logo-normal">
                            {login}
                        </a>
                    </div>
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <ul className="nav">
                            <li className={(componente.desc == "Dash" ? "active" : "")}>
                                <a onClick={() => setComponente({ componente: <Dash />, desc: "Dash" })}>
                                    <i className="now-ui-icons design_app"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            {props.token.tipo == "administrador" ? <li className={(componente.desc == "Inscrever" ? "active" : "")}>
                                <a onClick={() => setComponente({ componente: <Inscrever />, desc: "Inscrever" })}>
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Usuários</p>
                                </a>
                            </li> : ""}
                        </ul>
                    </div>
                </div>
                <div className={"main-panel " + (navopen ? "blur" : "")} id="main-panel">

                    <nav className={"navbar navbar-expand-lg   bg-primary  navbar-absolute  " + (optionsopen ? "bg-white" : "navbar-transparent")}>
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className={"navbar-toggle " + (navopen ? "toggled" : "")}>
                                    <button type="button" onClick={() => setNavOpen((navopen ? false : true))} className="navbar-toggler shadow-none">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </button>
                                </div>
                                <a className="navbar-brand">Psico - {props.token.tipo}</a>
                            </div>
                            <button className={"navbar-toggler shadow-none " + (optionsopen ? "" : "collapsed")} onClick={() => setOptionsOpen((optionsopen ? false : true))} type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded={(optionsopen ? "true" : "false")} aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                            </button>
                            <div className={"navbar-collapse justify-content-end collapse " + (optionsopen ? "show" : "")} id="navigation">
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

    var decode = jwt.decode(token);
    return {
        props: { token: decode }, // will be passed to the page component as props
    }
}