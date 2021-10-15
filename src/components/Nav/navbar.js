import Image from "next/image";
import logo from '../../assets/images/dmlogo.png';

export default function NavBar() {

    return <div id="header" className="header navbar navbar-default navbar-expand-lg navbar-fixed-top navbar-sm">

        <div className="container">

            <a style={{ filter: "invert(1)" }} href="./" className="navbar-brand">
                <Image src={logo}></Image>
            </a>

            <button type="button" className="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#header-navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>


            <div className="collapse navbar-collapse" id="header-navbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="./">Home</a></li>

                    { /*<li className="dropdown">
                        <a href="#" data-bs-toggle="dropdown">POSTS <b className="caret"></b></a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="post_grid.html">Page with Grid View Blog Post</a>
                            <a className="dropdown-item" href="post_without_sidebar.html">Page without Sidebar</a>
                        </div>
</li> */}
                    <li><a href="./Blog">Blog</a></li>
                    <li><a href="./Login">Entrar</a></li>
                </ul>
            </div>

        </div>

    </div>
}

