import { useState } from "react";

export default function Pacientes() {

    const [CadastrarIsOpen, setCadastrarIsOpen] = useState(false);

    return (
        <div className="content">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-tasks">
                        <div className="card-header ">
                            <h5 className="card-category">Pacientes</h5>
                            <hr className="my-2"></hr>
                            <button type="button" onClick={() => setCadastrarIsOpen(!CadastrarIsOpen)} className="btn btn-primary"><b>Novo</b></button>
                        </div>
                        <div className="card-body">

                            <div className={(CadastrarIsOpen ? "d-none" : "py-2")}>

                                <div className="row">
                                    <div className="col-5">
                                        <input placeholder="Nome" className="form-control   p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="CPF" className="form-control  p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="RG" className="form-control  p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="Nascimento" type="date" className="form-control   p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-5">
                                        <input placeholder="Endereço" className="form-control  p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="Telefone" className="form-control  p-2 mb-2 "></input>
                                    </div>
                                    <div className="col-2">
                                        <input placeholder="Celular" className="form-control  p-2 mb-2 "></input>
                                    </div>

                                    <div className="col">
                                        <input placeholder="E-mail" className="form-control  p-2 mb-2 "></input>
                                    </div>
                                </div>

                            </div>
                            <table class="table table-sm table-bordered table-striped table border shadow-sm">
                                <thead className="fs-11px ">
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>
                                        <th scope="col">RG  </th>
                                        <th scope="col">Nascimento </th>
                                        <th scope="col">Endereço </th>
                                        <th scope="col">Telefone  </th>
                                        <th scope="col">Celular  </th>
                                        <th scope="col">E-mail  </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Célia Do Nacimento Silva</th>
                                        <td>230.837.218-46</td>
                                        <td>18.149.388-3</td>
                                        <td>15/08/1996</td>
                                        <td>R. Guarani, 108 - Vila Tupi - SBC - SP</td>
                                        <td>(11) 95788-6697</td>
                                        <td>(11) 4509-5595</td>
                                        <td>phchortolani@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mailza Do Nacimento Silva</th>
                                        <td>131.470.198-37</td>
                                        <td>43.100.399-3</td>
                                        <td>24/04/2000</td>
                                        <td>R. José Damasio, 108 - Vila Tupi - SBC - SP</td>
                                        <td>(11) 95788-6697</td>
                                        <td>(11) 4509-5595</td>
                                        <td>mailza@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Joilma dos Santos Macedo</th>
                                        <td>321.645.285-98</td>
                                        <td>43.100.399-3</td>
                                        <td>24/04/1995</td>
                                        <td>Av. Giacinto Tognato, 108 - Baeta Neves - SBC - SP</td>
                                        <td>(11) 95788-6697</td>
                                        <td>(11) 4509-5595</td>
                                        <td>JoilmaStarPink@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        <div className="card-footer ">

                        </div>
                    </div>
                </div>

            </div>
        </div>)
}