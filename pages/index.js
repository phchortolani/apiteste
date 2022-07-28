
import { useEffect, useState, useContext } from "react";
import NavBar from "../src/components/Nav/navbar";
import { AuthContext } from "../context/Auth2Context";
import Head from 'next/head';
import axios from "axios";


export async function getStaticProps(context) {

    const dev = process.env.NODE_ENV !== 'production';
    // const ip = context.request.headers['x-forwarded-for'] || context.req.connection.remoteAddress  //ip de quem solicita
    const server = dev ? 'http://localhost:3000' : 'https://psidaramarques.com.br';

    const url = "https://graph.instagram.com/me/media?access_token="
        + process.env.INSTA_TOKEN +
        "&fields=media_url,media_type,caption,permalink,timestamp,thumbnail_url,id,username,children{media_url}&limit=16";

    var data = await fetch(url)
        .then(async function (response) {
            return await response.json();
        });



    if (data != null) {
        return {
            props: { dados: data ?? null, server, dev },
            revalidate: 60
        }
    }

}
export default function Ste(props) {

    const [dados, setDados] = useState(props.dados?.data);
    const [topScreen, setTopScreen] = useState(true);
    const [email, setEmail] = useState("");
    const { isMobile } = useContext(AuthContext);


    async function registerNews() {

        var regex = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
        if (!regex.test(email)) Swal.fire("E-mail não cadastrado", 'Por favor, insira um e-mail válido!', "error");
        else {
            var existe = await axios.post('/api/findone', { obj: { email: email.toLowerCase() }, table: "newsletter" });

            if (existe.data.result) {
                Swal.fire('Email já cadastrado!');

            } else {
                var ret = await axios.post('/api/sendemail', { email });
                if (ret) Swal.fire("Muito Obrigada!", 'Seu e-mail foi cadastrado com sucesso!', "success");
            }
        }
        setEmail("");
    }

    useEffect(() => {

        if (typeof window.sessionStorage.counterpsi == typeof undefined ) {
            (async () => {

                var ip = "";
                var local = "";
                ip = await fetch("https://api.ipify.org?format=json")
                    .then(async function (response) {
                        var res = await response.json()
                        if (res) {
                            return res.ip;
                        }
                    });

                local =  await axios.post('/api/ip', {ipString: ip} )

                
                await axios.post('/api/saveone', { obj: { page: "index.js", date: new Date(), link: props.server, ip: ip, local: (local.data || "") }, table: "counter" })
            })();

            window.sessionStorage.counterpsi = "true";
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && topScreen) {
                setTopScreen(false);
            } else setTopScreen(true);

        })
    }, [])

    let ogimage = "https://scontent.cdninstagram.com/v/t51.29350-15/274402002_665590744869027_9148663915898072871_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=TxfdKoFbhXsAX-2Hqmv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-F_Taj8yr8CGWPWMTNyVW1z_dx_Q32pFjW05yZqE4HIg&oe=621C07A3/t51.29350-15/2…yr8CGWPWMTNyVW1z_dx_Q32pFjW05yZqE4HIg&oe=621C07A3";


    return (
        <>
            <Head>
                <meta itemProp="name" content="Home | Psicóloga Online - Dara Marques" />
                <meta itemProp="description" content="Te ajudo a lidar melhor com a sua ansiedade para uma vida mais leve." />
                <meta itemProp="image" content={ogimage} />
                <meta name="description" content="Te ajudo a lidar melhor com a sua ansiedade para uma vida mais leve. - Psicóloga Online" />
                <meta property="og:url" content="https://psidaramarques.com.br/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Psicologia efetiva através da Terapia Cognitivo Comportamental, agende uma consulta! " />
                <meta property="og:description" content="Te ajudo a lidar melhor com a sua ansiedade para uma vida mais leve." />
                <meta property="og:image" content={ogimage} />
            </Head>

            <NavBar topScreen={topScreen} />
            <div id="page-container" className="bg-background-land" /* className="fade" */>
                <div id="home" className={"content has-bg home " + (isMobile ? "" : "gradientar")} data-aos={(!isMobile ? "fade-in" : "")}>
                    <div className="content-bg">
                    </div>
                    <div className="container home-content">
                        <h1 data-aos="zoom-in-down" data-aos-duration="3000" >Dara Marques</h1>
                        <h3 data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="1500" >Te ajudo a lidar melhor com a sua ansiedade para uma vida mais leve</h3>
                        <h3 data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="1500" >Psicóloga on-line</h3>
                        {/*    <button className="btn  btn-theme btn-primary" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="2000"> Autoagendamento</button> */}

                        <a href="https://api.whatsapp.com/send?phone=5511978493885" target="_blank" className="btn btn-theme btn-success btn-lg" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="2000"> <i className="fab fa-whatsapp fa-lg fa-fw"></i> Agende direto pelo WhatsApp</a>


                        {/* <a href="#" className="btn btn-theme btn-outline-white">Redes Sociais</a><br /> */}
                    </div>

                </div>


                <div id="about" className="content content100Vh" data-scrollview="true" data-aos="fade-up">
                    <div className="bg"></div>
                    <div className={isMobile ? "" : "container"} data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Sobre mim</h2>

                        <div className="row">

                            <div className="col-lg-6" data-aos="zoom-in-up">

                                <div className="about fs-18px">
                                    <h3 className="mb-3"></h3>
                                    <p>
                                        Sou psicóloga formada pela Universidade Metodista de São Paulo (UMESP), formada em Terapia Cognitivo Comportamental.
                                    </p>
                                    <p>
                                        O meu objetivo é ajudar mulheres a terem uma vida mais leve apesar da ansiedade. Meu trabalho as ajuda a lidar melhor com a ansiedade e a ter um maior equilíbrio emocional.
                                    </p>
                                </div>
                            </div>

                            {isMobile ? "" : <div className="col-lg-6" data-aos="zoom-in-up">
                                {/* <h3 className="mb-3">Minha Abordagem</h3> */}
                                <div className="about-author" >
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i>
                                        <h5 className="text-gray-700">Mude como você se sente, mudando o modo como você pensa.</h5>
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                    <div className="author">
                                        <div className="image">
                                            {/*               <img src="https://seantheme.com/color-admin/frontend/assets/img/bg/bg-home.jpg" alt="Sean Ngu" /> */}
                                        </div>
                                        <div className="info">
                                            Dara Marques
                                            <small>Psicóloga</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            }


                        </div>

                    </div>

                </div>


                <div id="team" className="content" data-scrollview="true">
                    <div className={isMobile ? "" : "container"}>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <div className="sobre-text h-100">
                                    <h2 className="content-title">
                                        Especialidades </h2>
                                    <div className="content-desc">
                                        <ul>
                                            <li>
                                                Psicoterapia Individual através da Terapia Cognitivo Comportamental
                                            </li>

                                            <li>
                                                Atualmente, a TCC é a abordagem com mais evidências científicas e é utilizada para tratar diversos transtornos mentais.

                                                Seu principal objetivo é identificar padrões de comportamentos, pensamentos e crenças que estão na origem do problema.
                                            </li>
                                            <li>
                                                Dara Macedo Marques Hortolani - <b>CRP: 06/164999</b>
                                            </li>
                                        </ul>


                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="sobre-text h-100">
                                    <h2 className="content-title">
                                        Qual é o foco do meu trabalho? </h2>
                                    <div className="content-desc">
                                        <p>
                                            Através dos atendimentos individuais, ajudo mulheres que buscam aprender a lidar com a ansiedade que normalmente está em torno do estresse, autocobrança, perfeccionismo, procrastinação, insegurança... e por ai vai!
                                        </p>
                                        <p>

                                            Ajuda a compreender que a ansiedade faz parte de nós,  que é possível viver com ela com mais leveza,  não a vendo como uma inimiga, entenderem melhor a si mesmas com a psicoterapia e a partir disso, ir fazendo mudanças saudáveis e duradouras. É gratificante vê-las se descobrindo, sabendo lidar de uma forma mais saudável com seus sentimentos, mudando hábitos de comportamento e tendo uma vida mais leve!
                                        </p>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


                <div id="service" className="content content100Vh" data-scrollview="true">
                    <div className="bg"></div>
                    <div className={isMobile ? "" : "container"}>

                        <h2 className="content-title">Vantagens do Atendimento On-line!</h2>
                        {/*  <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p> */}

                        <div className="row sobre-text shadow">

                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-mind-share"></i></div>
                                    <div className="info">
                                        <h4 className="title">Praticidade</h4>
                                        <p className="desc">Facilidade para conseguir encontrar um psicólogo que você se identifica e que percebe que pode te ajudar no seu problema.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-home-lg"></i></div>
                                    <div className="info">
                                        <h4 className="title">Comodidade</h4>
                                        <p className="desc">Você pode fazer na sua casa ou em qualquer lugar que você se sinta confortável, sem precisar gastar dinheiro com gasolina, transporte público e ter que enfrentar o trânsito.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-user-shield"></i></div>
                                    <div className="info">
                                        <h4 className="title">Sigiloso</h4>
                                        <p className="desc">O sigilo acontece da mesma forma que um atendimento presencial, mas nesse caso é importante que o paciente auxilie estando num ambiente que se sente confortável e seguro para que as informações não sejam ouvidas por outras pessoas.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-calendar-alt"></i></div>
                                    <div className="info">
                                        <h4 className="title">Horários flexíveis</h4>
                                        <p className="desc"> Por conta da praticidade tanto para os pacientes quanto para os psicólogos, os horários de agendamentos podem ser mais flexíveis.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-check-double"></i></div>
                                    <div className="info">
                                        <h4 className="title">Mesma Qualidade</h4>
                                        <p className="desc"> A terapia funciona da mesma forma que uma terapia presencial e por isso qualquer demanda ou questão levada pelo paciente o serviço será prestado com qualidade.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-heart"></i></div>
                                    <div className="info">
                                        <h4 className="title">Vínculo Terapêutico</h4>
                                        <p className="desc">Na terapia online o vínculo terapêutico também existe e é construído da mesma forma que no presencial.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>




                <div id="work" className="content" data-scrollview="true">

                    <div className={isMobile ? "" : "container"} data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Últimos Posts</h2>
                        <p className="content-desc text-center">
                            Veja abaixo alguns posts em que mostro como levar uma vida mais leve!
                        </p>

                        <div className="row row-space-10">

                            {dados ? dados.filter((element) => element.media_type == "IMAGE" || element.media_type == "CAROUSEL_ALBUM").map((e, i) => {

                                const regexTitle = /(.+)((\r?\n.+)*)/gm;
                                let title = e.caption.match(regexTitle)[0];

                                if (i >= 8) return "";


                                return <div key={i} className="col-lg-3 col-md-4 align-self-center ">
                                    <div className="work">
                                        <div className="image">
                                            <a href={e.permalink}><img src={e.media_url} alt={title} /></a>
                                        </div>
                                        <div className="desc">
                                            <span className="desc-title">{title}</span>
                                        </div>
                                    </div>

                                </div>
                            }) : ""}




                        </div>

                    </div>

                </div>




                <div id="contact" className="content content100Vh" data-scrollview="true">

                    <div className={isMobile ? "" : "container"}>
                        <h2 className="content-title text-white">Conteúdos</h2>
                        <p className="text-center" >
                            Caso tenha interesse de receber conteúdos sobre psicologia toda semana, me siga nas redes sociais e agende sua consulta!
                        </p>

                        <div className="row">

                            <div className="col">


                                <div className="team">
                                    <div className="image" data-animation="true" data-animation-type="animate__flipInX">
                                        <img className='saibamaispic border-white' src="./saibamaispicture.png" alt="Ryan Teller" />
                                    </div>
                                    <div className="info">
                                        <p>Me siga nas redes sociais!</p>
                                        <div className="social ">
                                            <a href="https://web.facebook.com/psidaramarques" target={"_blank"} ><i className="fab fa-facebook-f fa-lg fa-fw text-white"></i></a>
                                            <a href="https://www.instagram.com/psidaramarques/" target={"_blank"}><i className="fab fa-instagram fa-lg fa-fw text-white"></i></a>
                                            <a href="https://www.linkedin.com/in/daramarques/" target={"_blank"}><i className="fab fa-linkedin fa-lg fa-fw text-white"></i></a>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <a href="https://api.whatsapp.com/send?phone=5511978493885" target="_blank" className="btn btn-theme btn-success "> <i className="fab fa-whatsapp fa-lg fa-fw"></i> Agende direto pelo WhatsApp</a>
                                </div>
                            </div>


                            {/*          <div className="col-md-6 form-col" data-animation="true" data-animation-type="animate__fadeInRight">
                            
                                <form className="form-horizontal">
                                {isMobile && <hr></hr>}
                                    <h3 className="text-center mb-1">Newsletter</h3>
                                    <p className="text-center">
                                        Receba conteúdos por e-mail toda semana!
                                    </p>
                                    <div className="text-center">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Seu e-mail" />
                                        <button type="button" onClick={() => registerNews()} className="btn btn-theme btn-primary btn-block">Inscrever-se</button>
                                    </div>

                                    <div className="row mb-3">

                                        <label className="col-form-label col-lg-3 text-lg-right"></label>
                                        <div className="col-lg-9 text-left">

                                        </div>
                                    </div>
                                </form>
                            </div> */}

                        </div>

                    </div>

                </div>

                <a href="https://api.whatsapp.com/send?phone=5511978493885" target="_blank" style={{ position: 'fixed', bottom: '20px', right: '30px', zIndex: '9999' }}>
                  <img src="/whatsapp.svg" style={{filter: 'drop-shadow(0px 0px 10px white)'}}/>
                </a>
                {/*   <div id="footer" className="footer">
                    <div className={isMobile ? "" : "container"}>
                        <div className="footer-brand">
                            <img height={70} style={{filter: "color(""/)"}} width={70} src="./logoDara.svg"/>
                        </div>
                   
                     
                    </div>
                </div> */}


                {/*   <footer className="pb-2 mb-2" style={{ background: "#d0b3b5", color: "black", textAlign: "center" }}>
                    <hr className="mt-0"></hr>
                    <span className="text-muted small">
                        Powered by{' '} 
                        <a target={'_blank'} href="https://lanisystems.vercel.app"><img width={110} src='./lani-5andar2.svg'></img></a>
                    </span>
                </footer> */}
            </div>

        </>
    )
}