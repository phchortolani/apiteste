import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth2Context";
import { parseCookies } from "nookies";

export default function Index() {
    const { isMobile } = useContext(AuthContext);

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [authError, setAuthError] = useState('');
    const { signIn } = useContext(AuthContext);

    async function handleSignIn() {
        setAuthError("");
        if (usuario != "" && senha != "") {
            setAuthError(await signIn(usuario, senha));
        } else {
            setAuthError("Insira o usuário e a senha.")
        }

    }

    let bg = isMobile ? "bg-white" : "flowersBackGround"
    const sizelogo = 80;
    return (<>

        <section className={"vh-100 " + (bg)}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className={"card " + (isMobile ? "shadow-none rounded-0" : "shadow-lg")} style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="/loginBrand.png" alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body px-0 px-md-5 text-black">
                                        <form>
                                            <div className="text-center mb-3 pb-1">
                                                <img src="/logoDara.svg" width={sizelogo} height={sizelogo} />
                                            </div>
                                            <div className="divider d-flex align-items-center my-4">
                                                <p className="text-center fw-bold mx-3 mb-0 text-muted">Área do Paciente</p>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="usu">Usuário</label>
                                                <input onChange={(e) => setUsuario(e.target.value)} type="email" id="usu" className="form-control form-control-lg" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="senha">Senha</label>
                                                <input onChange={(e) => setSenha(e.target.value)} type="password" id="senha" className="form-control form-control-lg" />
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <a onClick={() => handleSignIn()} className="btn btn-primary btn-block btn-large w-100 saibamais-btn fw-bolder">Acessar</a>
                                                <p className="text-danger small">{authError}</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </>)

}


export async function getServerSideProps(ctx) {

    const { token } = parseCookies(ctx);

    if (token) {
        return {
            redirect: {
                destination: '/Dashboard',
                permanent: false
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}