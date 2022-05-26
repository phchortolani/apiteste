import { useState, useContext } from "react";
import { AuthContext } from "../../../context/Auth2Context";

export default function Carousel(props) {

    const [IdimgActive, setIdimgActive] = useState(0);
    const [firstRender, setfirstRender] = useState(true);
    const [imgsChildrens, setimgsChildrens] = useState(props.element.children.data);
    let TagsAMostrar = 2;

    const { isMobile } = useContext(AuthContext);

    if (firstRender) {
        setIdimgActive(props.element.children.data[0].id);
        setimgsChildrens(props.element.children.data);
        setfirstRender(false);
    }

    return (

        <div key={props.element.id} data-aos="fade-up" className="post-content">
            <div className="animate__fadeInUp contentAnimated finishAnimated " data-animation="true" data-animation-type="animate__fadeInUp">
              {/*   <h2 className="content-title">Arraste -></h2> */}

                <div className="carousel caroulselImgs slide " data-ride="carousel" id={"caroulselImgs_" + props.element.id}>
                    <div className="carousel-inner text-center shadow-sm">
                        {imgsChildrens.length > 0 ? imgsChildrens.map((e, i) => {
                            return <div key={e.id} id={e.id} className={"carousel-item " + (e.id == IdimgActive ? "active" : "")}>
                                <a target="_blank" href={props.element.permalink}>
                                    <img className="d-block w-100" src={e.media_url} alt={props.titulo} />
                                </a>
                                <div style={{ color: "#d8c3ae" }} className="name"><span className="text-primary"></span>
                                    {imgsChildrens.length == i + 1 ? <></> : <div className="d-none">Veja mais <i className="fa-angle-double-right fas"></i></div>}
                                </div>
                            </div>
                        }) : ""}

                    </div>
                    <ol className="carousel-indicators d-flex my-1 m-b-3">
                        {imgsChildrens.map((e, i) => {
                            return <li key={i} data-bs-target={"#caroulselImgs_" + props.element.id} data-bs-slide-to={i} className={(i == 0 ? "active" : "")}></li>
                        })}
                    </ol>
                </div>

            </div>
            <div className="post-info" data-aos="fade-up">
                <h4 className="post-title">
                    {props.titulo}
                </h4>
                {!isMobile ? <div className="post-by">
                    Por <a target="_blank" href={"https://www.instagram.com/" + props.element.username + "/"}>{props.element.username}</a> {props.tags?.length > 0 ? props.tags.slice(0, 3).map((e, i) => {
                        var tag = e ? e.replace("#", "") : "";
                        return <span key={"divider_" + i} > <span className="divider">|</span> <a href="#">{tag}</a> </span>
                    }) : ""}
                    {props.tags?.length > TagsAMostrar ? <> <span className="divider">|</span> <span style={{ cursor: "help" }} title={props.tags.slice(TagsAMostrar, props.tags.length)}>{"Mais " + (props.tags.length - TagsAMostrar) + " Categorias"}</span> </> : ""}
                </div> : ""}

                <div className="post-desc" style={{ textAlign: "justify" }}>
                    {props.caption}
                </div>
            </div>
        </div>




    )
}