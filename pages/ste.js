
import { useState } from "react";
import NavBar from "../src/components/Nav/navbar";
import wave1 from '../public/wave1.svg';

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

    return (
        <>


            <div id="page-container" /* className="fade" */>
                <NavBar />
                <div id="home" className="content has-bg home">
                    <div className="content-bg" data-paroller="true" data-paroller-type="foreground" data-paroller-factor="-0.25">
                    </div>
                    <div className="container home-content">
                        <h1>Psicóloga Dara Marques</h1>
                        <h3>CRP 06/164999</h3>
                        <p>
                            Construindo um dia a dia com mais maturidade!
                        </p>
                        <a href="#contact" className="btn btn-theme btn-primary">Agende uma consulta</a> <a href="#" className="btn btn-theme btn-outline-white">Siga no Instagram</a><br />
                    </div>
                    <img id="wave1" src={wave1} />
                </div>


                <div id="about" className="content mt-0" data-scrollview="true">

                    <div className="container" data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Sobre mim</h2>
                        <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p>

                        <div className="row">

                            <div className="col-lg-4">

                                <div className="about">
                                    <h3 className="mb-3">Minha História</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Vestibulum posuere augue eget ante porttitor fringilla.
                                        Aliquam laoreet, sem eu dapibus congue, velit justo ullamcorper urna,
                                        non rutrum dolor risus non sapien. Vivamus vel tincidunt quam.
                                        Donec ultrices nisl ipsum, sed elementum ex dictum nec.
                                    </p>
                                    <p>
                                        In non libero at orci rutrum viverra at ac felis.
                                        Curabitur a efficitur libero, eu finibus quam.
                                        Pellentesque pretium ante vitae est molestie, ut faucibus tortor commodo.
                                        Donec gravida, eros ac pretium cursus, est erat dapibus quam,
                                        sit amet dapibus nisl magna sit amet orci.
                                    </p>
                                </div>

                            </div>


                            <div className="col-lg-4">
                                <h3 className="mb-3">Minha Abordagem</h3>

                                <div className="about-author">
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i>
                                        <h3>We work harder,<br /><span>to let our user keep simple</span></h3>
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                    <div className="author">
                                        <div className="image">
                                            {/*               <img src="https://seantheme.com/color-admin/frontend/assets/img/bg/bg-home.jpg" alt="Sean Ngu" /> */}
                                        </div>
                                        <div className="info">
                                            Sean Ngu
                                            <small>Front End Developer</small>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4">
                                <h3 className="mb-3">Our Experience</h3>

                                <div className="skills">
                                    <div className="skills-name">Front End</div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme" style={{ width: "95%" }}>
                                            <span className="progress-number">95%</span>
                                        </div>
                                    </div>
                                    <div className="skills-name">Programming</div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme" style={{ width: "90%" }}>
                                            <span className="progress-number">90%</span>
                                        </div>
                                    </div>
                                    <div className="skills-name">Database Design</div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme" style={{ width: "85%" }}>
                                            <span className="progress-number">85%</span>
                                        </div>
                                    </div>
                                    <div className="skills-name">Wordpress</div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-theme" style={{ width: "80%" }}>
                                            <span className="progress-number">80%</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="milestone" className="content bg-black-darker has-bg" data-scrollview="true">

                    <div className="content-bg" /* style={{ backgroundImage: "url(../assets/img/bg/bg-milestone.jpg)" }} */></div>


                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 milestone-col">
                                <div className="milestone">
                                    <div className="number" data-animation="true" data-animation-type="number" data-final-number="1292">1,292</div>
                                    <div className="title">Themes  Template</div>
                                </div>
                            </div>


                            <div className="col-lg-3 milestone-col">
                                <div className="milestone">
                                    <div className="number" data-animation="true" data-animation-type="number" data-final-number="9039">9,039</div>
                                    <div className="title">Registered Members</div>
                                </div>
                            </div>


                            <div className="col-lg-3 milestone-col">
                                <div className="milestone">
                                    <div className="number" data-animation="true" data-animation-type="number" data-final-number="89291">89,291</div>
                                    <div className="title">Items Sold</div>
                                </div>
                            </div>


                            <div className="col-lg-3 milestone-col">
                                <div className="milestone">
                                    <div className="number" data-animation="true" data-animation-type="number" data-final-number="129">129</div>
                                    <div className="title">Theme Authors</div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div id="team" className="content" data-scrollview="true">

                    <div className="container">
                        <h2 className="content-title">Our Team</h2>
                        <p className="content-desc">
                            Phasellus suscipit nisi hendrerit metus pharetra dignissim. Nullam nunc ante, viverra quis<br />
                            ex non, porttitor iaculis nisi.
                        </p>

                        <div className="row">

                            <div className="col-lg-4">

                                <div className="team">
                                    <div className="image" data-animation="true" data-animation-type="animate__flipInX">
                                        <img /* src="../assets/img/user/user-1.jpg" alt="Ryan Teller" */ />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Ryan Teller</h3>
                                        <div className="title text-theme">FOUNDER</div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                        <div className="social">
                                            <a href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g fa-lg fa-fw"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-4">

                                <div className="team">
                                    <div className="image" data-animation="true" data-animation-type="animate__flipInX">
                                        <img /* src="../assets/img/user/user-2.jpg" alt="Jonny Cash"  */ />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Johnny Cash</h3>
                                        <div className="title text-theme">WEB DEVELOPER</div>
                                        <p>Donec quam felis, ultricies nec, pellentesque eu sem. Nulla consequat massa vierra quis enim.</p>
                                        <div className="social">
                                            <a href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g fa-lg fa-fw"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-4">

                                <div className="team">
                                    <div className="image" data-animation="true" data-animation-type="animate__flipInX">
                                        <img /* src="../assets/img/user/user-3.jpg" alt="Mia Donovan"  */ />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Mia Donovan</h3>
                                        <div className="title text-theme">WEB DESIGNER</div>
                                        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean ligula imperdiet. </p>
                                        <div className="social">
                                            <a href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g fa-lg fa-fw"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="quote" className="content bg-black-darker has-bg" data-scrollview="true">

                    <div className="content-bg" /* style={{ backgroundImage: "url(../assets/img/bg/bg-quote.jpg)" }} */ data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
                    </div>


                    <div className="container" data-animation="true" data-animation-type="animate__fadeInLeft">

                        <div className="row">

                            <div className="col-lg-12 quote">
                                <i className="fa fa-quote-left"></i> Passion leads to design, design leads to performance, <br />
                                performance leads to <span className="text-theme">success</span>!
                                <i className="fa fa-quote-right"></i>
                                <small>Sean Themes, Developer Teams in Malaysia</small>
                            </div>

                        </div>

                    </div>

                </div>


                <div id="service" className="content" data-scrollview="true">

                    <div className="container">
                        <h2 className="content-title">Our Services</h2>
                        <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p>

                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-cog"></i></div>
                                    <div className="info">
                                        <h4 className="title">Easy to Customize</h4>
                                        <p className="desc">Duis in lorem placerat, iaculis nisi vitae, ultrices tortor. Vestibulum molestie ipsum nulla. Maecenas nec hendrerit eros, sit amet maximus leo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-paint-brush"></i></div>
                                    <div className="info">
                                        <h4 className="title">Clean & Careful Design</h4>
                                        <p className="desc">Etiam nulla turpis, gravida et orci ac, viverra commodo ipsum. Donec nec mauris faucibus, congue nisi sit amet, lobortis arcu.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-file"></i></div>
                                    <div className="info">
                                        <h4 className="title">Well Documented</h4>
                                        <p className="desc">Ut vel laoreet tortor. Donec venenatis ex velit, eget bibendum purus accumsan cursus. Curabitur pulvinar iaculis diam.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-code"></i></div>
                                    <div className="info">
                                        <h4 className="title">Re-usable Code</h4>
                                        <p className="desc">Aenean et elementum dui. Aenean massa enim, suscipit ut molestie quis, pretium sed orci. Ut faucibus egestas mattis.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-shopping-cart"></i></div>
                                    <div className="info">
                                        <h4 className="title">Online Shop</h4>
                                        <p className="desc">Quisque gravida metus in sollicitudin feugiat. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-heart"></i></div>
                                    <div className="info">
                                        <h4 className="title">Free Support</h4>
                                        <p className="desc">Integer consectetur, massa id mattis tincidunt, sapien erat malesuada turpis, nec vehicula lacus felis nec libero. Fusce non lorem nisl.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div id="action-box" className="content has-bg" data-scrollview="true">

                    <div className="content-bg"/*  style={{ backgroundImage: "url(../assets/img/bg/bg-quote.jpg)" }} */ data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
                    </div>


                    <div className="container" data-animation="true" data-animation-type="animate__fadeInRight">

                        <div className="row action-box">

                            <div className="col-lg-9">
                                <div className="icon-large text-theme">
                                    <i className="fa fa-binoculars"></i>
                                </div>
                                <h3>CHECK OUT OUR ADMIN THEME!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus magna eu lacinia eleifend.
                                </p>
                            </div>


                            <div className="col-lg-3">
                                <a href="#" className="btn btn-outline-white btn-theme btn-block">Live Preview</a>
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

                                return <div key={i} className="col-lg-3 col-md-4">
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


                <div id="client" className="content has-bg bg-green" data-scrollview="true">

                    <div className="content-bg" /* style={{ backgroundImage: "url(../assets/img/bg/bg-quote.jpg)" }}  */ data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
                    </div>


                    <div className="container" data-animation="true" data-animation-type="animate__fadeInUp">
                        <h2 className="content-title">Our Client Testimonials</h2>

                        <div className="carousel testimonials slide" data-ride="carousel" id="testimonials">

                            <div className="carousel-inner text-center">

                                <div className="carousel-item active">
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, nulla ut interdum fringilla,<br />
                                        urna massa cursus lectus, eget rutrum lectus neque non ex.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <div className="name"> — <span className="text-theme">Mark Doe</span>, Designer</div>
                                </div>


                                <div className="carousel-item">
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        Donec cursus ligula at ante vulputate laoreet. Nulla egestas sit amet lorem non bibendum.<br />
                                        Nulla eget risus velit. Pellentesque tincidunt velit vitae tincidunt finibus.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <div className="name"> — <span className="text-theme">Joe Smith</span>, Developer</div>
                                </div>


                                <div className="carousel-item">
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        Sed tincidunt quis est sed ultrices. Sed feugiat auctor ipsum, sit amet accumsan elit vestibulum<br />
                                        fringilla. In sollicitudin ac ligula eget vestibulum.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <div className="name"> — <span className="text-theme">Linda Adams</span>, Programmer</div>
                                </div>

                            </div>


                            <ol className="carousel-indicators m-b-0">
                                <li data-bs-target="#testimonials" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#testimonials" data-bs-slide-to="1" className=""></li>
                                <li data-bs-target="#testimonials" data-bs-slide-to="2" className=""></li>
                            </ol>

                        </div>

                    </div>

                </div>


                <div id="contact" className="content bg-light" data-scrollview="true">

                    <div className="container">
                        <h2 className="content-title">Contact Us</h2>
                        <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p>

                        <div className="row">

                            <div className="col-lg-6" data-animation="true" data-animation-type="animate__fadeInLeft">
                                <h3>If you have a project you would like to discuss, get in touch with us.</h3>
                                <p>
                                    Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus.
                                </p>
                                <p>
                                    <strong>SeanTheme Studio, Inc</strong><br />
                                    795 Folsom Ave, Suite 600<br />
                                    San Francisco, CA 94107<br />
                                    P: (123) 456-7890<br />
                                </p>
                                <p>
                                    <span className="phone">+11 (0) 123 456 78</span><br />
                                    <a href="/cdn-cgi/l/email-protection#8ce4e9e0e0e3cce9e1ede5e0ede8e8fee9ffffa2efe3e1" className="text-theme"><span className="__cf_email__" data-cfemail="196a7c78776d717c747c6a596a6c6969766b6d377a7674">[email&#160;protected]</span></a>
                                </p>
                            </div>


                            <div className="col-lg-6 form-col" data-animation="true" data-animation-type="animate__fadeInRight">
                                <form className="form-horizontal">
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Name <span className="text-theme">*</span></label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Email <span className="text-theme">*</span></label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Message <span className="text-theme">*</span></label>
                                        <div className="col-lg-9">
                                            <textarea className="form-control" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right"></label>
                                        <div className="col-lg-9 text-left">
                                            <button type="submit" className="btn btn-theme btn-primary btn-block">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>


                <div id="footer" className="footer">
                    <div className="container">
                        <div className="footer-brand">
                            <div className="footer-brand-logo"></div>
                            Color Admin
                        </div>
                        <p>
                            &copy; Copyright Color Admin 2021 <br />
                            An admin & front end theme with serious impact. Created by <a href="#">SeanTheme</a>
                        </p>
                        <p className="social-list">
                            <a href="#"><i className="fab fa-facebook-f fa-fw"></i></a>
                            <a href="#"><i className="fab fa-instagram fa-fw"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-fw"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g fa-fw"></i></a>
                            <a href="#"><i className="fab fa-dribbble fa-fw"></i></a>
                        </p>
                    </div>
                </div>




            </div>

        </>
    )
}