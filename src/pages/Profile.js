import React, {useContext, useEffect} from 'react'
import {GitHubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {user, repos, getUser, getRepos, loading} = useContext(GitHubContext)
    const userName = match.params.name

    useEffect(() => {
        getUser(userName)
        getRepos(userName)
        // eslint-disable-next-line
    }, [])

    if (loading)
        return <p className="text-center">Загрузка....</p>

    const {
        name, company, avatar_url,
        location, bio, blog, login,
        html_url, followers, public_repos,
        public_gists, following} = user
    return (
        <>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <a href={html_url} className="btn btn-dark mt-2"  rel="noreferrer" target="_blank">Открыть профиль</a>
                            <h1>{name}</h1>
                            {location && <p>{location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <ul>
                                { login && <li><strong>Username: </strong> {login} </li>}
                                { company && <li><strong>Company: </strong> {company} </li>}
                                { blog && <li><strong>Website: </strong> {blog} </li>}
                            </ul>
                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-success">Подписан: {following}</div>
                            <div className="badge badge-dark">Репозитории: {public_repos}</div>
                            <div className="badge badge-info">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </>
    )
}