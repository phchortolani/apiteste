import React from "react";
export default function Dash() {
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-6">
                    <div className="card  card-tasks">
                        <div className="card-header ">
                            <h5 className="card-category">Backend development</h5>
                            <h4 className="card-title">Tasks</h4>
                        </div>
                        <div className="card-body ">
                            <div className="table-full-width table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                    <i className="now-ui-icons ui-2_settings-90"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                    <i className="now-ui-icons ui-2_settings-90"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" />
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="text-left">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                            </td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                    <i className="now-ui-icons ui-2_settings-90"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer ">
                            <hr />
                            <div className="stats">
                                <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-category">All Persons List</h5>
                            <h4 className="card-title"> Employees Stats</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Country
                                            </th>
                                            <th>
                                                City
                                            </th>
                                            <th className="text-right">
                                                Salary
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Dakota Rice
                                            </td>
                                            <td>
                                                Niger
                                            </td>
                                            <td>
                                                Oud-Turnhout
                                            </td>
                                            <td className="text-right">
                                                $36,738
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
