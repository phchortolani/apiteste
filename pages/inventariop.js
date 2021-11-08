import { useEffect, useState } from "react";
import NavBar from "../src/components/Nav/navbar";

export default function Inventariop() {

    const Questoes = ["Meu trabalho precisa ser perfeito para que eu fique satisfeita.",
        "Sou extremamente sensível aos comentários dos outros.",
        "Geralmente digo às pessoas quando seu trabalho não está à altura dos meus padrões.",
        "Sou bem organizada."
    ];
    const [QuestaoAtual, setNumeroQuestao] = useState(0);
    const [Resultados, setResultados] = useState([]);

    let porcentagem = (QuestaoAtual / Questoes.length * 100);
    if (porcentagem > 100) porcentagem = 100;
    else if (porcentagem < 0) porcentagem = 0;

    const controles = {
        Avancar() {
            setNumeroQuestao(QuestaoAtual + 1);
        },
        Voltar() {
            setNumeroQuestao(QuestaoAtual - 1);
        },
        setRespostaAtual(resp) {
            if (!controles.VerificaSeExiste()) {
                setResultados([...Resultados, { Pergunta: QuestaoAtual, Resposta: resp }]);
            } else {
                let index = Resultados.indexOf(Resultados.find((e) => { return e.Pergunta == QuestaoAtual }));
                let tempResultado = Resultados.splice(index, 1);
                setResultados(tempResultado);
                controles.setRespostaAtual(resp);
            }
        },
        VerificaSeExiste() {
            let ret = Resultados.find((e) => { return e.Pergunta == QuestaoAtual });
            return ret ? true : false;
        },
        VerificaCheck(NumResp) {
            if (!controles.VerificaSeExiste()) return false;
            let ret = Resultados.find((e) => { return e.Pergunta == QuestaoAtual });
            return ret.Resposta == NumResp;
        }
    }

  
    return (
        <>
            <NavBar />
            <div id="inventario" style={{ minHeight: "100vh" }} className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-2 mb-2">
                        <div data-aos="fade-in" className="card px-3 pt-4 pb-0 mt-3 ">
                            <h2 id="heading">Inventário de Perfeccionismo</h2>
                            <p>Por favor, use as opções a seguir para avaliar o quanto você concorda em geral com cada afirmação.</p>

                            {porcentagem > 0 ? <div className="p-2"> <div data-aos="fade-in" id="prog" className="progress">
                                <div className={"progress-bar progress-bar-striped progress-bar-animated bg-theme"} style={{ width: porcentagem + '%' }}>
                                    <span className="progress-number">{porcentagem}%</span>
                                </div>
                            </div> </div> : ""}


                            <hr />
                            {porcentagem == 100 ? <fieldset data-aos="fade-in">
                                <i style={{ color: "#f0cbb8" }} className="fas fa-check-circle fa-4x"></i>
                                <h4 className="p-3">Suas informações foram enviadas!</h4>

                            </fieldset> : <div id="msform">
                                <fieldset data-aos="fade-in">
                                    <div className="form-card">
                                        <h6 className="fs-title">"{Questoes[QuestaoAtual]}"</h6>
                                        <br />
                                        <input type="radio" className="btn-check" onClick={() => { controles.setRespostaAtual(1) }} name="options" id="option1" autoComplete="off" readOnly checked={controles.VerificaCheck(1)} />
                                        <label className="btn btn-outline-danger d-grid" htmlFor="option1">Discordo Plenamente</label>
                                        <input type="radio" className="btn-check" onClick={() => { controles.setRespostaAtual(2) }} name="options" id="option2" autoComplete="off" readOnly checked={controles.VerificaCheck(2)} />
                                        <label className="btn btn-outline-warning d-grid" htmlFor="option2">Discordo em Parte</label>
                                        <input type="radio" className="btn-check" onClick={() => { controles.setRespostaAtual(3) }} name="options" id="option3" autoComplete="off" readOnly checked={controles.VerificaCheck(3)} />
                                        <label className="btn btn-outline-secondary d-grid" htmlFor="option3">Nem concordo nem discordo</label>
                                        <input type="radio" className="btn-check" onClick={() => { controles.setRespostaAtual(4) }} name="options" id="option4" autoComplete="off" readOnly checked={controles.VerificaCheck(4)} />
                                        <label className="btn btn-outline-aqua d-grid" htmlFor="option4">Concordo em parte</label>
                                        <input type="radio" className="btn-check" onClick={() => { controles.setRespostaAtual(5) }} name="options" id="option5" autoComplete="off" readOnly checked={controles.VerificaCheck(5)} />
                                        <label className="btn btn-outline-success d-grid" htmlFor="option5">Concordo plenamente</label>
                                    </div>
                                    <hr />
                                    {QuestaoAtual > 0 ? <input type="button" name="voltar" className="btn btn-primary" value="Voltar" onClick={() => controles.Voltar()} />
                                        : ""}
                                    <input type="button" name="next" className="btn btn-primary" value="Próximo" disabled={!controles.VerificaSeExiste()} onClick={() => controles.Avancar()} />
                                </fieldset>
                            </div>}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}