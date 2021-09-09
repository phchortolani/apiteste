import Image from "next/image";
import logo from '../../assets/images/dmlogo.png';

export default function NavBar() {
    
    return <div className="bg-white shadow-sm">
        <header style={{borderColor:"#9caba0 !important"}} className="d-flex flex-wrap align-items-center border-3 justify-content-center justify-content-md-between border-bottom">
            <a href="/" className="d-flex justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <Image height="50px" width="50px" className="rounded-0" src={logo} />
            </a>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Meu trabalho</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Blog</a></li>

            </ul>
            <div className="col-md-3 text-center">
                <a href="https://wa.me/5511963483375?text=" target="_blank" type="button" className="btn btn-outline-primary me-2">Agendar consulta!</a>
                <button type="button" onClick={() => { window.location.href = "/Login" }} className="btn btn-primary">Entrar</button>
            </div>
        </header>
    </div>
}

