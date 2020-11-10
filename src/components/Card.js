import React from "react"
import {Link} from "react-router-dom";

export const Card = ({user}) => (
    <div className="card">
        <img src={user.avatar_url} alt={user.login} className="card-img-top"/>
        <div className="card-body">
            <h3 className="card-title">{user.login}</h3>
            <Link to={"profile/" + user.login} className="btn btn-primary"> Открыть</Link>
        </div>
    </div>
)
