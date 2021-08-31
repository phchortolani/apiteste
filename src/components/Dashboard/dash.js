import React from "react";
import Blog from "../Blog/blog";

export default function Dash() {
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-12">
                    <div className="card  card-tasks">
                        <div className="card-header ">
                            <h5 className="card-category">@psidaramarques</h5>
                            <h4 className="card-title">Blog</h4>
                        </div>
                        <div className="card-body ">
                            <Blog />
                        </div>
                        <div className="card-footer ">
                            <hr />
                            <div className="stats">
                                <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
