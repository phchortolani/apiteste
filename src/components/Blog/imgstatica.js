import Image from 'next/image';
export default function ImgStatic(props) {
    return (
        <div data-aos="fade-up" className="post-content">
            <div className="post-image">
                <a target="_blank" href={props.element.permalink}>
                    <img className="d-block w-100 shadow-lg" src={props.element.media_url} alt="" />
                </a>
            </div>
            <div className="post-info" data-aos="fade-up">
                <h4 className="post-title">
                    {props.titulo}
                </h4>
                <div className="post-by">
                    Postado por <a target="_blank" href={"https://www.instagram.com/" + props.element.username + "/"}>
                        {props.element.username}</a> {props.tags?.length > 0 ? props.tags.slice(0, 3).map((e, i) => {
                            var tag = e ? e.replace("#", "") : "";
                            return <span key={"divider_" + i} > <span className="divider">|</span> <a href="#">{tag}</a> </span>
                        }) : ""}
                    {props.tags?.length > 3 ? <> <span className="divider">|</span> <span style={{ cursor: "help" }} title={props.tags.slice(3, props.tags.length)}>{"Mais " + (props.tags.length - 3) + " Categorias"}</span>  </> : ""}
                </div>
                <div className="post-desc" style={{ textAlign: "justify" }}>
                    {props.caption}
                </div>
            </div>
            {/* <div className="read-btn-container">
            <a href="post_detail.html" className="read-btn">Leia mais <i className="fa fa-angle-double-right"></i></a>
        </div> */}
        </div>

    )

}