import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext";
import {GitHubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext);
    const gitHub = useContext(GitHubContext)

    const onSubmit= event => {
        if (event.key !== 'Enter') {
            return;
        }

        if (value.trim()) {
            gitHub.search(value.trim())
            alert.hide()
        } else {
            alert.show('Введено пустое значение')
            gitHub.clearUsers()
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя.."
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}
