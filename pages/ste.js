import Aos from "aos";
import { useEffect } from "react";
import NavBar from "../src/components/Nav/navbar";
import 'aos/dist/aos.css';

export default function Ste() {
    useEffect(() => {
        Aos.init({duration: 1500});

    }, [])

    return (
        <>
            <div id="page-container" className="fade show">

                <NavBar />


                <div id="home" className="content has-bg home" style={{ height: '288px' }}>

                    <div className="content-bg" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-xs="0.25">
                    </div>


                    <div className="container home-content">
                        <h1 data-aos="fade-up">Welcome to Color Admin</h1>
                        <h3>Multipurpose One Page Theme</h3>
                        <p>
                            We have created a multi-purpose theme that take the form of One-Page or Multi-Page Version.<br />
                            Use our <a href="#">theme panel</a> to select your favorite theme color.
                        </p>
                        <a href="#" className="btn btn-theme btn-primary">Explore More</a> <a href="#" className="btn btn-theme btn-outline-white">Purchase Now</a><br />
                        <br />
                        or <a href="#">subscribe</a> newsletter
                    </div>

                </div>


                <div id="about" className="content" data-scrollview="true">

                    <div className="container animate__fadeInDown contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">About Us</h2>
                        <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p>

                        <div className="row">

                            <div className="col-lg-4">

                                <div className="about">
                                    <h3 className="mb-3">Our Story</h3>
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
                                <h3 className="mb-3">Our Philosophy</h3>

                                <div className="about-author">
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i>
                                        <h3>We work harder,<br /><span>to let our user keep simple</span></h3>
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                    <div className="author">
                                        <div className="image">
                                            <img src="../assets/img/user/user-1.jpg" alt="Sean Ngu" />
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

                    <div className="content-bg" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01"></div>



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
                                    <div className="image animate__flipInX contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__flipInX">
                                        <img src="../assets/img/user/user-1.jpg" alt="Ryan Teller" />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Ryan Teller</h3>
                                        <div className="title text-primary">FOUNDER</div>
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
                                    <div className="image animate__flipInX contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__flipInX">
                                        <img src="../assets/img/user/user-2.jpg" alt="Jonny Cash" />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Johnny Cash</h3>
                                        <div className="title text-primary">WEB DEVELOPER</div>
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
                                    <div className="image animate__flipInX contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__flipInX">
                                        <img src="../assets/img/user/user-3.jpg" alt="Mia Donovan" />
                                    </div>
                                    <div className="info">
                                        <h3 className="name">Mia Donovan</h3>
                                        <div className="title text-primary">WEB DESIGNER</div>
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

                    <div className="content-bg" data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
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
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-cog"></i></div>
                                    <div className="info">
                                        <h4 className="title">Easy to Customize</h4>
                                        <p className="desc">Duis in lorem placerat, iaculis nisi vitae, ultrices tortor. Vestibulum molestie ipsum nulla. Maecenas nec hendrerit eros, sit amet maximus leo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-paint-brush"></i></div>
                                    <div className="info">
                                        <h4 className="title">Clean &amp; Careful Design</h4>
                                        <p className="desc">Etiam nulla turpis, gravida et orci ac, viverra commodo ipsum. Donec nec mauris faucibus, congue nisi sit amet, lobortis arcu.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-file"></i></div>
                                    <div className="info">
                                        <h4 className="title">Well Documented</h4>
                                        <p className="desc">Ut vel laoreet tortor. Donec venenatis ex velit, eget bibendum purus accumsan cursus. Curabitur pulvinar iaculis diam.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-code"></i></div>
                                    <div className="info">
                                        <h4 className="title">Re-usable Code</h4>
                                        <p className="desc">Aenean et elementum dui. Aenean massa enim, suscipit ut molestie quis, pretium sed orci. Ut faucibus egestas mattis.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-shopping-cart"></i></div>
                                    <div className="info">
                                        <h4 className="title">Online Shop</h4>
                                        <p className="desc">Quisque gravida metus in sollicitudin feugiat. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="service">
                                    <div className="icon animate__bounceIn contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__bounceIn"><i className="fa fa-heart"></i></div>
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

                    <div className="content-bg" data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
                    </div>


                </div>


                <div id="work" className="content" data-scrollview="true">

                    <div className="container animate__fadeInDown contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__fadeInDown">
                        <h2 className="content-title">Our Latest Work</h2>
                        <p className="content-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur eros dolor,<br />
                            sed bibendum turpis luctus eget
                        </p>

                        <div className="row row-space-10">

                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-1.jpg" alt="Work 1" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Aliquam molestie</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-2.jpg" alt="Work 2" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Quisque at pulvinar lacus</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-3.jpg" alt="Work 3" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Vestibulum et erat ornare</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-4.jpg" alt="Work 4" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Sed vitae mollis magna</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-5.jpg" alt="Work 5" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Suspendisse at mattis odio</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-6.jpg" alt="Work 6" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Aliquam vitae commodo diam</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-7.jpg" alt="Work 7" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Phasellus eu vehicula lorem</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4">

                                <div className="work">
                                    <div className="image">
                                        <a href="#"><img src="../assets/img/work/work-img-8.jpg" alt="Work 8" /></a>
                                    </div>
                                    <div className="desc">
                                        <span className="desc-title">Morbi bibendum pellentesque</span>
                                        <span className="desc-text">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="client" className="content has-bg bg-green" data-scrollview="true">

                    <div className="content-bg" data-paroller-factor="0.5" data-paroller-factor-md="0.01" data-paroller-factor-xs="0.01">
                    </div>


                    <div className="container animate__fadeInUp contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__fadeInUp">
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
                                    <div className="name"> — <span className="text-primary">Mark Doe</span>, Designer</div>
                                </div>


                                <div className="carousel-item">
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        Donec cursus ligula at ante vulputate laoreet. Nulla egestas sit amet lorem non bibendum.<br />
                                        Nulla eget risus velit.Pellentesque tincidunt velit vitae tincidunt finibus.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <div className="name"> — <span className="text-primary">Joe Smith</span>, Developer</div>
                                </div>


                                <div className="carousel-item">
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        Sed tincidunt quis est sed ultrices. Sed feugiat auctor ipsum, sit amet accumsan elit vestibulum<br />
                                        fringilla.In sollicitudin ac ligula eget vestibulum.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <div className="name"> — <span className="text-primary">Linda Adams</span>, Programmer</div>
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


                <div id="contact" className="content bg-silver-lighter" data-scrollview="true">

                    <div className="container">
                        <h2 className="content-title">Entre em contato!</h2>
                        <p className="content-desc">
                            Em caso de dúvidas do funcionamento da terapia, solicitações de
                        </p>

                        <div className="row">

                            <div className="col-lg-6 animate__fadeInLeft contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__fadeInLeft">
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
                                    <a href="mailto:hello@emailaddress.com" className="text-primary">seanthemes @support.com</a>
                                </p>
                            </div>


                            <div className="col-lg-6 form-col animate__fadeInRight contentAnimated finishAnimated" data-animation="true" data-animation-type="animate__fadeInRight">
                                <form className="form-horizontal">
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Name <span className="text-primary">*</span></label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Email <span className="text-primary">*</span></label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label className="col-form-label col-lg-3 text-lg-right">Message <span className="text-primary">*</span></label>
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
                            © Copyright Color Admin 2021 <br />
                            An admin &amp; front end theme with serious impact.Created by <a href="#">SeanTheme</a>
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


                <div className="theme-panel">
                    <a href="#" data-click="theme-panel-expand" className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
                    <div className="theme-panel-content">
                        <ul className="theme-list clearfix">
                            <li><a href="#" className="bg-red" data-theme="red" data-theme-file="../assets/css/one-page-parallax/theme/red.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-pink" data-theme="pink" data-theme-file="../assets/css/one-page-parallax/theme/pink.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-orange" data-theme="orange" data-theme-file="../assets/css/one-page-parallax/theme/orange.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-yellow" data-theme="yellow" data-theme-file="../assets/css/one-page-parallax/theme/yellow.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-lime" data-theme="lime" data-theme-file="../assets/css/one-page-parallax/theme/lime.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-green" data-theme="green" data-theme-file="../assets/css/one-page-parallax/theme/green.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li className="active"><a href="#" className="bg-teal" data-theme-file="../assets/css/one-page-parallax/theme/teal.min.css" data-theme="default" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-cyan" data-theme="aqua" data-theme-file="../assets/css/one-page-parallax/theme/cyan.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-blue" data-theme="blue" data-theme-file="../assets/css/one-page-parallax/theme/blue.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-purple" data-theme="purple" data-theme-file="../assets/css/one-page-parallax/theme/purple.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-indigo" data-theme="indigo" data-theme-file="../assets/css/one-page-parallax/theme/indigo.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                            <li><a href="#" className="bg-black" data-theme="black" data-theme-file="../assets/css/one-page-parallax/theme/black.min.css" data-click="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Black" data-original-title="" title="" data-bs-original-title="">&nbsp;</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}