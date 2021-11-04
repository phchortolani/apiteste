import NavBar from "../../src/components/Nav/navbar";
import { useState } from 'react';
import Head from 'next/head';
import Postagens from "../../src/components/Blog/Postagens";

let firstRender = true;

export async function getStaticProps(context) {

    const dev = process.env.NODE_ENV !== 'production';
    //context.req.connection.remoteAddress; ip de quem solicita
    const server = dev ? 'http://localhost:3000' : 'https://psidaramarques.com.br';

    var data = await fetch(`${server}/api/obterBlog`)
        .then(async function (response) {
            return await response.json();
        });

    return {
        props: { dados: data },
        revalidate: 60 * 60
    }
}

export default function Blog(props) {

    const [dados, setDados] = useState([]);

    let postporpagina = 5;

    const [pagination, SetPagination] = useState({
        page: 1,
        perPage: postporpagina,
        totalPage: props.dados != null && props.dados != undefined ? Math.ceil(props.dados?.length / postporpagina) : 0
    });

    const paginationControls = {
        next() {
            pagination.page++;
            if (pagination.page > pagination.totalPage) {
                pagination.page--;
            }
            list.update();
        },
        prev() {
            pagination.page--;
            if (pagination.page < 1) pagination.page++;
            list.update();
        },
        goTo(page) {
            if (page == pagination.page) return;
            if (page < 1) page = 1;
            pagination.page = page;
            if (page > pagination.totalPage) {
                pagination.page = pagination.totalPage
            }
            list.update();
        }
    }

    const list = {
        update() {
            let page = pagination.page - 1;
            let start = page * pagination.perPage;
            let end = start + pagination.perPage;
            const posts = props.dados?.slice(start, end);
            setDados(posts);
        }
    }
    const buttons = {
        create() {
            const { maxEsquerda, maxDireita } = buttons.calculateMaxVisible();
            let result = [];
            for (let page = maxEsquerda; page <= maxDireita; page++) {
                result.push(<li key={page} className={"page-item  " + (pagination.page == page ? "active " : "")}><a href="#" onClick={() => paginationControls.goTo(page)} className="page-link">{page}</a></li>);
            }
            return result;
        },
        calculateMaxVisible() {
            let maxEsquerda = (pagination.page - Math.floor(5 / 2));
            let maxDireita = (pagination.page + Math.floor(5 / 2));
            if (maxEsquerda < 1) {
                maxEsquerda = 1;
                maxDireita = pagination.totalPage > 5 ? 5 : pagination.totalPage;
            }
            if (maxDireita > pagination.totalPage) {
                maxEsquerda = pagination.totalPage - 4;
                maxDireita = pagination.totalPage;
                if (maxEsquerda < 1) maxEsquerda = 1;
            }

            return { maxEsquerda, maxDireita };
        }
    }


    const UltimasLi = <>
        <li className="page-item">
            <span className="text">...</span></li><li className="page-item">
            <a onClick={() => paginationControls.goTo(pagination.totalPage)} className="page-link">{pagination.totalPage}</a>
        </li>
    </>

    if (firstRender) {
        firstRender = false;
        list.update();
    }


    const ogimage = 'https://scontent.cdninstagram.com/v/t51.29350-15/245021037_261759715853180_1041340040552307482_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=rBECYMIykEsAX86ARdn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=efe68f4ff700e246a2b05a3b1ff79fce&oe=6178037B';
    return (

        <div className="pace-done">
            <Head>
                <title>Blog | Dara Marques - Psicóloga clínica</title>
                <meta itemProp="name" content="Blog | Psicóloga Dara Marques - Ansiedade" />
                <meta itemProp="description" content="Te ajudo a lidar com a ansiedade e ter uma vida mais leve!" />
                <meta itemProp="image" content={ogimage} />
                <meta property="og:url" content="https://psidaramarques.com.br/Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog | Como lidar com a ansiedade?" />
                <meta property="og:description" content="Te ajudo a lidar com a ansiedade e ter uma vida mais leve!" />
                <meta property="og:image" content={ogimage} />
            </Head>
            <div className="pace pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress="99" >
                <div className="pace-progress-inner"></div>
            </div>
                <div className="pace-activity"></div></div>
            <NavBar />

            <div id="page-title" data-aos="fade-down" className="page-title has-bg">
                <div className="bg-cover blogCover" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-xs="0.2" ></div>
                <div className="container">
                </div>
            </div>

            <div id="content" className="content">

                <div className="container">

                    <div className="row row-space-30">

                        <div className="col-lg-8">
                            <span data-aos="fade-left" className="d-block ms-md-5 ps-lg-2 text-light-600">Pagina: {pagination.page} de {pagination.totalPage}</span>

                            <Postagens dados={dados} />

                            <div className="section-container">
                                <div className="pagination-container">
                                    <ul className="pagination justify-content-center">
                                        <li className={"page-item " + (pagination.page == 1 ? "disabled" : "")}><a onClick={() => paginationControls.prev()} className="page-link" >Ante</a></li>
                                        {buttons.create()}
                                        {pagination.totalPage > 5 ? UltimasLi : ""}
                                        {pagination.totalPage > 1 ? <li className={"page-item " + (pagination.page == pagination.totalPage ? "disabled" : "")}><a onClick={() => paginationControls.next()} className="page-link">Próx</a></li> : ""}
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-3 mt-4">
                            {/*          <div className="section-container">
                                <div className="input-group sidebar-search">
                                    <input type="text" className="form-control" placeholder="Search Our Stories..." />
                                    <button className="btn btn-inverse" type="button"><i className="fa fa-search"></i></button>
                                </div>
                            </div>*/}
                            {/*      <div className="section-container">
                                <h4 className="section-title"><span>Categorias</span></h4>
                                <ul className="sidebar-list">
                                    <li><a href="#">Sports (20)</a></li>
                                    <li><a href="#">Outdoor Sports (45)</a></li>
                                    <li><a href="#">Indoor Sports (1,292)</a></li>
                                    <li><a href="#">Video Shooting (12)</a></li>
                                    <li><a href="#">Drone (229)</a></li>
                                    <li><a href="#">Uncategorized (1,482)</a></li>
                                </ul>
                            </div> */}


                            <div className="section-container" data-aos="fade-up">
                                <h4 className="section-title m-0 p-0"><span>Me siga</span></h4>
                                <ul className="sidebar-social-list">
                                    <li><a target='_blank' href="https://www.instagram.com/psidaramarques/"><i className="fab fa-instagram"></i> psidaramarques</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div id="footer-copyright" className="footer-copyright">

                <div className="container d-sm-flex">
                    <span className="copyright d-block">© {new Date().toLocaleDateString().split("/")[2]} psidaramarques</span>
                    <ul className="social-media-list mt-2 mt-sm-0 flex-1">
                        <li><a href="https://instagram.com/psidaramarques" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

            </div>


        </div>


    )
}