import { parseCookies } from 'nookies';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth2Context';
import Image from 'next/image';
import logo from '../../src/assets/images/dmlogo.png';

export default function Dashbord() {
    const { login, signOut } = useContext(AuthContext);
    const [expandemenu, setExpandemenu] = useState("hidden");

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
                            <li className="active ">
                                <a href="./dashboard.html">
                                    <i className="now-ui-icons design_app"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="./icons.html">
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Icons</p>
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
                                <form>
                                    <div className="input-group no-border">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="now-ui-icons media-2_sound-wave"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Stats</span>
                                            </p>
                                        </a>
                                    </li>
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
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="now-ui-icons users_single-02"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Account</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="panel-header panel-header-lg">
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card  card-tasks">
                                    <div className="card-header ">
                                        <h5 className="card-category">Backend development</h5>
                                        <h4 className="card-title">Tasks</h4>
                                    </div>
                                    <div className="card-body ">
                                        <div className="table-full-width table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer ">
                                        <hr />
                                        <div className="stats">
                                            <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-category">All Persons List</h5>
                                        <h4 className="card-title"> Employees Stats</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr>
                                                        <th>
                                                            Name
                                                        </th>
                                                        <th>
                                                            Country
                                                        </th>
                                                        <th>
                                                            City
                                                        </th>
                                                        <th className="text-right">
                                                            Salary
                                                        </th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Dakota Rice
                                                        </td>
                                                        <td>
                                                            Niger
                                                        </td>
                                                        <td>
                                                            Oud-Turnhout
                                                        </td>
                                                        <td className="text-right">
                                                            $36,738
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Minerva Hooper
                                                        </td>
                                                        <td>
                                                            Curaçao
                                                        </td>
                                                        <td>
                                                            Sinaai-Waas
                                                        </td>
                                                        <td className="text-right">
                                                            $23,789
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Sage Rodriguez
                                                        </td>
                                                        <td>
                                                            Netherlands
                                                        </td>
                                                        <td>
                                                            Baileux
                                                        </td>
                                                        <td className="text-right">
                                                            $56,142
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Doris Greene
                                                        </td>
                                                        <td>
                                                            Malawi
                                                        </td>
                                                        <td>
                                                            Feldkirchen in Kärnten
                                                        </td>
                                                        <td className="text-right">
                                                            $63,542
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Mason Porter
                                                        </td>
                                                        <td>
                                                            Chile
                                                        </td>
                                                        <td>
                                                            Gloucester
                                                        </td>
                                                        <td className="text-right">
                                                            $78,615
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className=" container-fluid ">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://presentation.creative-tim.com">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                            Blog
                                        </a>
                                    </li>
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