import Image from "next/image";

import Link from 'next/link';
import svglogo from '../../../public/logoDara.svg';

export default function NavBar(props) {

    return <div id="header" className={"header navbar navbar-default navbar-expand-lg navbar-fixed-top navbar-sm " + (props.topScreen ? "navbar-transparent" : "" ) }>

        <div className="container">

            <a data-aos="zoom-in" style={{ filter: "invert(1)" }} href="./" className="navbar-brand">
                <img src={svglogo}></img>
            </a>

            <button type="button" className="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#header-navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>



            <div className="collapse navbar-collapse" id="header-navbar">
                <ul className="nav navbar-nav navbar-right">
                    <li data-aos="zoom-in" >
                        <Link href="/">
                            <a className="text-white">Home</a>
                        </Link>
                    </li>

                    { /*<li className="dropdown">
                        <a href="#" data-bs-toggle="dropdown">POSTS <b className="caret"></b></a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="post_grid.html">Page with Grid View Blog Post</a>
                            <a className="dropdown-item" href="post_without_sidebar.html">Page without Sidebar</a>
                        </div>
</li> */}
                    <li data-aos="zoom-in">
                        <a  className="text-white" href="/Blog">Blog</a>
                    </li>
                    <li data-aos="zoom-in">
                        <a className="text-white" href="/Login">Entrar</a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
}

