import React from "react";
import { Link } from "react-router-dom"

function CyberwayTemplates() {
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-sm-4">
                    <Link to={"/templates/cyberway/transfer"}>transfer</Link>
                </div>
                <div className="col-sm-4">
                    <div><Link to={"/templates/cyberway/bidname"}>bidname</Link></div>
                    <div><Link to={"/templates/cyberway/bidrefund"}>bidrefund</Link></div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

function GolosTemplates() {
    return (
        <div className="card-body">
            <div><Link to={"/templates/golos/upvote"}>upvote</Link></div>
            <div><Link to={"/templates/golos/delegate"}>delegate</Link></div>
        </div>
    )
}

export default 
function TemplateOverview(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <h3>Transaction templates</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Cyberway</h4>
                        </div>                    
                        <CyberwayTemplates />
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <div className="card">
                            <div className="card-header">
                                <h4>Golos</h4>
                            </div>                    
                            <GolosTemplates />
                        </div>
                    </div>
            </div>
        </div>
    );

}