import React, {useContext} from 'react'
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GitHubContext} from "../context/github/githubContext";
import {Pagination} from "../components/UI/Pagination";
import  paginate from "../utils/paginate"

export const Home = () => {
    const {loading, users: AllUsers, currentPage, pageHandler, pageSize} = useContext(GitHubContext)
    const users =  (AllUsers.length !== 0) ? paginate(AllUsers, currentPage, pageSize) : AllUsers

    return (
        <>
            <Search/>
            <div className="row">
            {loading
                ? <p className="text-center">Загрузка....</p>
                : users.map(user => (
                    <div className="col-sm-3 mb-4" key={user.id}>
                        <Card user={user}/>
                    </div>
                ))
            }
            </div>
            <Pagination
                itemsCount={AllUsers.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={pageHandler}
            />
        </>
    )
}
