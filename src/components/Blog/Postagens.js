import Carousel from "./carousel";
import ImgStatic from "./imgstatica";
import { RetornaMes } from "./formatarmes";

export default function postagens(props) {

    return (
        props.dados != null ? <ul className="post-list">
            {props.dados.length > 0 ?
                props.dados.map((e, i) => {
                    let caption = e.caption;
                    const regextag = /\B(\#[a-zA-Z-ôâÃãõÇç]+\b)(?!;)/g;
                    const regexTitle = /(.+)((\r?\n.+)*)/gm;
                    let tags = caption.match(regextag);
                    let title = caption.match(regexTitle)[0];
                    let data = new Date(e.timestamp).toLocaleDateString().split("T")[0].split("/");
                    let mounth = RetornaMes(data[1]);
                    let paragrafos = caption.match(regexTitle);

                    paragrafos = paragrafos.map((e, i) => {
                        if(i == 0) return


                        if(e = e.replace(regextag, ""))
                        
                        return <p style={{lineHeight: "initial"}} className="mb-3" key={i}>{e}</p>
                    })

                    if (tags?.length > 0) {
                        tags.forEach(element => {
                            caption = caption.replace(element, "");
                        });
                        caption = caption.replace(title, "");
                    }
                    let post;
                    if (e.media_type == "CAROUSEL_ALBUM") post = <Carousel titulo={title} element={e} tags={tags} caption={paragrafos} />;
                    else post = <ImgStatic titulo={title} element={e} tags={tags} caption={paragrafos} />;

                    return <li className="p-md-5 pt-md-0 pb-md-0" key={i + e.id}>
                        <div className="post-left-info " data-aos="fade-right">
                            <div className="post-date">
                                <span className="day">{data[0]}</span>
                                <span className="month">{mounth}</span>
                            </div>
                            <div className="post-likes">
                                <i className="text-primary"></i>
                                <span className="number">{data[2]}</span>
                            </div>
                        </div>
                        {post}
                    </li>

                }) : ""}
        </ul> : ""

    )


}