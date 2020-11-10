import {CHANGE_PAGE, CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";

const handlers = {
    [GET_USER]: (state, payload) => ({...state, user: payload, loading: false}),
    [SEARCH_USERS]: (state, payload) => ({...state, users: payload, loading: false}),
    [CLEAR_USERS]: (state) => ({...state, users: []}),
    [GET_REPOS]: (state, payload) => ({...state, repos: payload, loading: false}),
    [SET_LOADING]: (state) => ({...state, loading: true, currentPage: 1}),
    [CHANGE_PAGE]: (state, payload) => ({...state, currentPage: payload}),
    DEFAULT: (state) => state
}

export const GitHubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}
