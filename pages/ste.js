
import { useEffect, useState } from "react";
import NavBar from "../src/components/Nav/navbar";

export async function getStaticProps(context) {

    // const dev = process.env.NODE_ENV !== 'production';
    //context.req.connection.remoteAddress; ip de quem solicita
    //const server = dev ? 'http://localhost:3000' : 'https://psidaramarques.com.br';

    const url = "https://graph.instagram.com/me/media?access_token="
        + process.env.INSTA_TOKEN +
        "&fields=media_url,media_type,caption,permalink,timestamp,thumbnail_url,id,username,children{media_url}";

    var data = await fetch(url)
        .then(async function (response) {
            return await response.json();
        });

    if (data != null) {
        return {
            props: { dados: data ?? null },
            revalidate: 60
        }
    }

}

export default function Ste(props) {

    const [dados, setDados] = useState(props.dados?.data);
    const [topScreen, setTopScreen] = useState(true);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && topScreen) {
                setTopScreen(false);
            } else setTopScreen(true);

        })
    }, [])



    return (
        <>

            <NavBar topScreen={topScreen} />
            <div id="page-container" className="bg-background-land" /* className="fade" */>
                <div id="home" className="content has-bg home gradientar" data-aos="fade-in">
                    <div className="content-bg">
                    </div>
                    <div className="container home-content">
                        <h1 data-aos="zoom-in-down" data-aos-duration="3000" >Dara Marques</h1>
                        <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="1500"  >Construindo um dia a dia com mais maturidade!</h3>

                        {/*    <button className="btn  btn-theme btn-primary" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="2000"> Autoagendamento</button> */}

                        <button className="btn btn-theme btn-success" data-aos="zoom-in-up" data-aos-delay="2000" data-aos-duration="2000"> <i className="fab fa-whatsapp fa-lg fa-fw"></i> Agende direto pelo WhatsApp</button>


                        {/* <a href="#" className="btn btn-theme btn-outline-white">Redes Sociais</a><br /> */}
                    </div>

                </div>


                <div id="about" className="content" data-scrollview="true" data-aos="fade-up">
                    <div className="bg"></div>
                    <div className="container" data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Sobre mim</h2>

                        <div className="row">

                            <div className="col-lg-6" data-aos="zoom-in-right">

                                <div className="about">
                                    <h3 className="mb-3"></h3>
                                    <p>
                                        Sou psicóloga formada pela Universidade Metodista de São Paulo (UMESP), formada em Terapia Cognitivo Comportamental.
                                    </p>
                                    <p>
                                        O meu objetivo é ajudar mulheres a terem uma vida mais leve apesar da ansiedade. Meu trabalho as ajuda a lidar melhor com a ansiedade e a ter um maior equilíbrio emocional.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-6" data-aos="zoom-in-left">
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


                        </div>

                    </div>

                </div>


                <div id="team" className="content" data-scrollview="true">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <div className="sobre-text h-100">
                                    <h2 className="content-title">
                                        Especialidades </h2>
                                    <p className="content-desc">
                                        <p>
                                            - Psicoterapia Individual através da Terapia Cognitivo Comportamental
                                        </p>
                                        <p>
                                            - Dara Macedo Marques Hortolani - CRP: 06/164999
                                        </p>

                                    </p>
                                </div>

                            </div>
                            <div className="col-md-6">

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


                <div id="service" className="content" data-scrollview="true">
                    <div className="bg"></div>
                    <div className="container">

                        <h2 className="content-title">Vantagens do Atendimento On-line!</h2>
                       {/*  <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p> */}

                        <div className="row sobre-text shadow">

                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-cog"></i></div>
                                    <div className="info">
                                        <h4 className="title">Praticidade</h4>
                                        <p className="desc">Facilidade para conseguir encontrar um psicólogo que você se identifica e que percebe que pode te ajudar no seu problema.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-paint-brush"></i></div>
                                    <div className="info">
                                        <h4 className="title">Comodidade</h4>
                                        <p className="desc">Você pode fazer na sua casa ou em qualquer lugar que você se sinta confortável, sem precisar gastar dinheiro com gasolina, transporte público e ter que enfrentar o trânsito.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-file"></i></div>
                                    <div className="info">
                                        <h4 className="title">Sigiloso</h4>
                                        <p className="desc">O sigilo acontece da mesma forma que um atendimento presencial, mas nesse caso é importante que o paciente auxilie estando num ambiente que se sente confortável e seguro para que as informações não sejam ouvidas por outras pessoas.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-code"></i></div>
                                    <div className="info">
                                        <h4 className="title">Horários flexíveis</h4>
                                        <p className="desc"> Por conta da praticidade tanto para os pacientes quanto para os psicólogos, os horários de agendamentos podem ser mais flexíveis.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-shopping-cart"></i></div>
                                    <div className="info">
                                        <h4 className="title">Mesma Qualidade</h4>
                                        <p className="desc"> A terapia funciona da mesma forma que uma terapia presencial e por isso qualquer demanda ou questão levada pelo paciente o serviço será prestado com qualidade;</p>
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

                    <div className="container" data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Últimos Posts</h2>
                        <p className="content-desc">
                            Veja abaixo alguns posts em que mostro como levar uma vida mais leve!
                        </p>

                        <div className="row row-space-10">

                            {dados ? dados.map((e, i) => {

                                const regexTitle = /(.+)((\r?\n.+)*)/gm;
                                let title = e.caption.match(regexTitle)[0];

                                if (i >= 8) return "";

                                return <div key={i} className="col-lg-3 col-md-4 ">
                                    <div className="work">
                                        <div className="image">
                                            <a href={e.permalink}><img src={e.media_url} /></a>
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




                <div id="contact" className="content" data-scrollview="true">

                    <div className="container">
                        <h2 className="content-title text-white">Conteúdos</h2>
                        <p className="text-center" >
                            Caso tenha interesse de receber conteúdos sobre psicologia toda semana, me siga nas redes sociais e se inscreva na minha newsletter.
                        </p>

                        <div className="row">

                            <div className="col-md-6">


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
                                </div>
                            </div>


                            <div className="col-md-6 form-col" data-animation="true" data-animation-type="animate__fadeInRight">
                                <form className="form-horizontal">
                                    <h3 className="text-center mb-1">Newsletter</h3>
                                    <p className="text-center">
                                        Receba conteúdos por e-mail toda semana!
                                    </p>
                                    <div className="text-center">
                                        <input type="text" className="form-control" placeholder="Seu e-mail" />
                                        <button type="submit" className="btn btn-theme btn-primary btn-block">Inscrever-se</button>
                                    </div>

                                    <div className="row mb-3">

                                        <label className="col-form-label col-lg-3 text-lg-right"></label>
                                        <div className="col-lg-9 text-left">

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>


                {/*   <div id="footer" className="footer">
                    <div className="container">
                        <div className="footer-brand">
                            <img height={70} style={{filter: "color(""/)"}} width={70} src="./logoDara.svg"/>
                        </div>
                   
                     
                    </div>
                </div> */}




            </div>

        </>
    )
}