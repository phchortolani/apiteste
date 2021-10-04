import NavBar from "../../src/components/Nav/navbar";
import { useState } from 'react';

export async function getServerSideProps(context) {

    const dev = process.env.NODE_ENV !== 'production';

    const server = dev ? 'http://localhost:3000' : 'https://psidaramarques.com.br';

    var data = await fetch(`${server}/api/obterBlog`)
        .then(async function (response) {
            return await response.json();
        })
    return {
        props: { dados: data },
    }
}

export default function Blog(props) {

    const [dados, setDados] = useState([]);
    const [firstRender, SetFirstRender] = useState(true);

    async function obterBlog() {
        SetFirstRender(false);
        if (props.dados) {
            setDados(props.dados);
        }
    }

    if (firstRender) obterBlog();

    return (
        <div className="pace-done">
            <div className="pace pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress="99" >
                <div className="pace-progress-inner"></div>
            </div>
                <div className="pace-activity"></div></div>
            <NavBar />


            <div id="page-title" className="page-title has-bg">
                <div className="bg-cover" data-paroller="true" data-paroller-factor="0.5" data-paroller-factor-xs="0.2" ></div>
                <div className="container">
                    <h1>@psidaramarques</h1>
                    <p></p>
                </div>
            </div>


            <div id="content" className="content">

                <div className="container">

                    <div className="row row-space-30">

                        <div className="col-lg-9">

                            <ul className="post-list"> {/*
                            
                             <li>

                                    <div className="post-left-info">
                                        <div className="post-date">
                                            <span className="day">03</span>
                                            <span className="month">SEPT</span>
                                        </div>
                                        <div className="post-likes">
                                            <i className="fa fa-heart text-primary"></i>
                                            <span className="number">520</span>
                                        </div>
                                    </div>


                                    <div className="post-content">

                                        <div className="post-image post-image-with-carousel">

                                            <div id="carousel-post" className="carousel slide" data-ride="carousel">

                                                <ol className="carousel-indicators">
                                                    <li data-target="#carousel-post" data-slide-to="0" className="active"></li>
                                                    <li data-target="#carousel-post" data-slide-to="1"></li>
                                                    <li data-target="#carousel-post" data-slide-to="2"></li>
                                                </ol>


                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <a href="post_detail.html"><img className="d-block w-100" src="https://t1.rg.ltmcdn.com/pt/images/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="post_detail.html"><img className="d-block w-100" src="https://t1.rg.ltmcdn.com/pt/images/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <a href="post_detail.html"><img className="d-block w-100" src="https://t1.rg.ltmcdn.com/pt/images/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg" alt="" /></a>
                                                    </div>
                                                </div>


                                                <a className="carousel-control-prev" href="#carousel-post" role="button" data-slide="prev">
                                                    <span className="fa fa-chevron-left" aria-hidden="true"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#carousel-post" role="button" data-slide="next">
                                                    <span className="fa fa-chevron-right" aria-hidden="true"></span>
                                                </a>

                                            </div>

                                        </div>


                                        <div className="post-info">
                                            <h4 className="post-title">
                                                <a href="post_detail.html">Bootstrap Carousel Blog Post</a>
                                            </h4>
                                            <div className="post-by">
                                                Posted By <a href="#">admin</a> <span className="divider">|</span> <a href="#">Sports</a>, <a href="#">Mountain</a>, <a href="#">Bike</a> <span className="divider">|</span> 2 Comments
                                            </div>
                                            <div className="post-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit dolor, elementum ut ligula ultricies,
                                                aliquet eleifend risus. Vivamus ut auctor sapien. Morbi at nibh id lorem viverra commodo augue dui, in pellentesque odio tempor.
                                                Etiam lobortis vel enim vitae facilisis. Suspendisse ac faucibus diam, non malesuada nisl. Maecenas vel aliquam eros, sit amet gravida lacus.
                                                nteger dictum, nulla [...]
                                            </div>
                                        </div>


                                        {<div className="read-btn-container">
                                            <a href="post_detail.html">Leia mais <i className="fa fa-angle-double-right"></i></a>
                                        </div>}

</div>

</li>
                            */}

                                {dados.length > 0 ? dados.map((e, i) => {
                                    let caption = e.caption;
                                    const regextag = /\B(\#[a-zA-Z-ôâÃãõÇç]+\b)(?!;)/g;
                                    const regexTitle = /(.+)((\r?\n.+)*)/gm;
                                    let tags = caption.match(regextag);
                                    let title = caption.match(regexTitle)[0];
                                    let data = new Date(e.timestamp).toLocaleDateString().split("T")[0].split("/");
                                    let mounth = "";
                                    switch (data[1]) {
                                        case "01":
                                            mounth = "JAN"
                                            break;
                                        case "02":
                                            mounth = "FEV"
                                            break;
                                        case "03":
                                            mounth = "MAR"
                                            break;
                                        case "04":
                                            mounth = "ABR"
                                            break;
                                        case "05":
                                            mounth = "MAI"
                                            break;
                                        case "06":
                                            mounth = "JUN"
                                            break;
                                        case "07":
                                            mounth = "JUL"
                                            break;
                                        case "08":
                                            mounth = "AGO"
                                            break;
                                        case "09":
                                            mounth = "SET"
                                            break;
                                        case "10":
                                            mounth = "OUT"
                                            break;
                                        case "11":
                                            mounth = "NOV"
                                            break;
                                        case "12":
                                            mounth = "DEZ"
                                            break;
                                    }

                                    if (tags?.length > 0) {
                                        tags.forEach(element => {
                                            caption = caption.replace(element, "");
                                        });
                                        caption = caption.replace(title, "");
                                    }
                                    return <li key={i + e.id}>
                                        <div className="post-left-info">
                                            <div className="post-date">
                                                <span className="day">{data[0]}</span>
                                                <span className="month">{mounth}</span>
                                            </div>
                                            <div className="post-likes">
                                                <i className="fa fa-heart text-primary"></i>
                                                <span className="number">{data[2]}</span>
                                            </div>
                                        </div>


                                        <div className="post-content">

                                            <div className="post-image">
                                                <a href="post_detail.html"><img className="d-block w-100" src={e.media_url} alt="" /></a>
                                            </div>
                                            <div className="post-info">
                                                <h4 className="post-title">
                                                    {title}
                                                </h4>
                                                <div className="post-by">
                                                    Postado por <a target="_blank" href={"https://www.instagram.com/" + e.username + "/"}>{e.username}</a> {tags?.length > 0 ? tags.slice(0, 3).map((e, i) => {
                                                        var tag = e ? e.replace("#", "") : "";
                                                        return <span key={"divider_" + i} > <span className="divider">|</span> <a href="#">{tag}</a> </span>
                                                    }) : ""}
                                                    {tags?.length > 3 ? <> <span className="divider">|</span> {"Mais " + (tags.length - 3) + " Categorias"} </> : ""}
                                                </div>
                                                <div className="post-desc" style={{ textAlign: "justify" }}>
                                                    {caption}
                                                </div>
                                            </div>
                                            {/* <div className="read-btn-container">
                                                <a href="post_detail.html" className="read-btn">Leia mais <i className="fa fa-angle-double-right"></i></a>
                                            </div> */}
                                        </div>

                                    </li>

                                }) : ""}
                            </ul>
                            {/*    <div className="section-container">
                                <div className="pagination-container">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><a className="page-link" href="#">Prev</a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><span className="text">...</span></li>
                                        <li className="page-item"><a className="page-link" href="#">1797</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Próx</a></li>
                                    </ul>
                                </div>
                            </div>*/}

                        </div>


                        <div className="col-lg-3">
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


                            <div className="section-container">
                                <h4 className="section-title"><span>Me siga</span></h4>
                                <ul className="sidebar-social-list">
                                    <li><a target='_blank' href="https://www.instagram.com/psidaramarques/"><i className="fab fa-instagram"></i>@psidaramarques</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



            {/*
  <div id="footer" className="footer">
 <div className="container">

                    <div className="row">

                        <div className="col-md-3 col-6">

                            <div className="section-container">
                                <h4 className="footer-title">Categorias</h4>
                                <ul className="categories">
                                    <li><a href="#">Sports</a></li>
                                    <li><a href="#">Outdoor Sports</a></li>
                                    <li><a href="#">Indoor Sports</a></li>
                                    <li><a href="#">Video Shooting</a></li>
                                    <li><a href="#">Drone</a></li>
                                    <li><a href="#">Uncategorized</a></li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-md-3 col-6">

                            <div className="section-container">
                                <h4 className="footer-title">Archives</h4>
                                <ul className="archives">
                                    <li><a href="#">June 2018</a> <span className="total">(102)</span></li>
                                    <li><a href="#">May 2018</a> <span className="total">(46)</span></li>
                                    <li><a href="#">April 2018</a> <span className="total">(84)</span></li>
                                    <li><a href="#">March 2018</a> <span className="total">(67)</span></li>
                                    <li><a href="#">February 2018</a> <span className="total">(99)</span></li>
                                    <li><a href="#">January 2018</a> <span className="total">(113)</span></li>
                                    <li><a href="#">December 2017</a> <span className="total">(25)</span></li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-md-3 col-6">

                            <div className="section-container">
                                <h4 className="footer-title">Recent Posts</h4>
                                <ul className="recent-post">
                                    <li>
                                        <h4>
                                            <a href="#">Nam ut urna hendrerit</a>
                                            <span className="time">February 22, 2018</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="#">className aptent taciti sociosqu</a>
                                            <span className="time">July 15, 2018</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4>
                                            <a href="#">Donec rhoncus arcu</a>
                                            <span className="time">March 21, 2018</span>
                                        </h4>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-md-3 col-6">
                            <div className="section-container">
                                <h4 className="footer-title">About Color Admin</h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
*/}



            <div id="footer-copyright" className="footer-copyright">

                <div className="container d-sm-flex">
                    <span className="copyright d-block">© {new Date().toLocaleDateString().split("/")[2]} psidaramarques</span>
                    <ul className="social-media-list mt-2 mt-sm-0 flex-1">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                    </ul>
                </div>

            </div>


        </div>


    )
}