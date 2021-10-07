import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Carousel(props) {

    const [IdimgActive, setIdimgActive] = useState(0);
    const [firstRender, setfirstRender] = useState(true);
    const [imgsChildrens, setimgsChildrens] = useState(props.element.children.data);


    if (firstRender) {
        setIdimgActive(props.element.children.data[0].id);
        setimgsChildrens(props.element.children.data);
        setfirstRender(false);
    }

    return (

        <div key={props.element.id} className="post-content">
            <div className="animate__fadeInUp contentAnimated finishAnimated " data-animation="true" data-animation-type="animate__fadeInUp">
                <h2 className="content-title"></h2>

                <div className="carousel caroulselImgs slide" data-ride="carousel" id={"caroulselImgs_" + props.element.id}>
                    <div className="carousel-inner text-center">
                        {imgsChildrens.length > 0 ? imgsChildrens.map((e, i) => {
                            return <div key={e.id} id={e.id} className={"carousel-item " + (e.id == IdimgActive ? "active" : "")}>
                                <img className="d-block w-100" src={e.media_url} alt="" />
                                <div style={{ color: "#d8c3ae" }} className="name"><span className="text-primary"></span>
                                    {imgsChildrens.length == i + 1 ? <>Você viu tudo! <FontAwesomeIcon icon={faSmileBeam} /></> : <>Veja mais <FontAwesomeIcon icon={faHandPointRight} /></>}
                                </div>
                            </div>
                        }) : ""}

                    </div>
                    <ol className="carousel-indicators  m-b-0">
                        {imgsChildrens.map((e, i) => {
                            return <li key={i} data-bs-target={"#caroulselImgs_" + props.element.id} data-bs-slide-to={i} className={(i == 0 ? "active" : "")}></li>
                        })}
                    </ol>
                </div>

            </div>
            <div className="post-info">
                <h4 className="post-title">
                    {props.titulo}
                </h4>
                <div className="post-by">
                    Postado por <a target="_blank" href={"https://www.instagram.com/" + props.element.username + "/"}>{props.element.username}</a> {props.tags?.length > 0 ? props.tags.slice(0, 3).map((e, i) => {
                        var tag = e ? e.replace("#", "") : "";
                        return <span key={"divider_" + i} > <span className="divider">|</span> <a href="#">{tag}</a> </span>
                    }) : ""}
                    {props.tags?.length > 3 ? <> <span className="divider">|</span> {"Mais " + (props.tags.length - 3) + " Categorias"} </> : ""}
                </div>
                <div className="post-desc" style={{ textAlign: "justify" }}>
                    {props.caption}
                </div>
            </div>
        </div>




    )
}