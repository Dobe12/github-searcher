import React, {useReducer} from 'react'
import {GitHubReducer} from "./githubReducer";
import {GitHubContext} from "./githubContext";
import {CHANGE_PAGE, CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import * as axios from "axios";

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url =>
    `${url}client_id=${client_id}&client_secret=${client_secret}`


export const GitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
        currentPage: 1,
        pageSize: 12
    }

    const [state, dispatch] = useReducer(GitHubReducer, initialState)

    const setLoading = () => dispatch({type: SET_LOADING})

    const search = async value => {
        setLoading()
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({type: SEARCH_USERS, payload: response.data.items})
    }

    const getUser = async name => {
        setLoading()
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({type: GET_USER, payload: response.data})
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const getRepos = async name => {
        setLoading()
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispatch({type: GET_REPOS, payload: response.data})
    }

    const pageHandler = page => {
        dispatch({type: CHANGE_PAGE, payload: page})
    }

    const {user, users, repos, loading, currentPage, pageSize} = state

    return (
        <GitHubContext.Provider value={{
            setLoading, search, getUser, getRepos, clearUsers,
            users, user, repos, loading,
            currentPage, pageSize, pageHandler
        }}>
            {children}
        </GitHubContext.Provider>
    )

}
