'use client'
import pageStyles from "./page.module.css"
import {FormEvent, useState} from "react";
import login from "requests/login_service/login";
import {useRouter} from "next/navigation";
import RequestError from "../../requests/base_error";
import {setCookie} from "cookies-next";

export default function Page() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<null | string>(null)
    const {replace} = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const {token} = await login(email, password)
            setCookie('access_token', token)
            replace('/departments')
        } catch (error) {
            if (error instanceof RequestError) {
                setError(error.response)
                return
            }
            throw error
        }
    }

    return <form className={pageStyles.loginContainer} onSubmit={onSubmit}>
        <label htmlFor="email" className={pageStyles.loginLabel}>Почта
            <input id="email" type={"email"} className={pageStyles.loginInput}
                   autoFocus={true} value={email}
                   onChange={e => setEmail(e.target.value)}/>
        </label>

        <label htmlFor="password" className={pageStyles.loginLabel}>Пароль
            <input id="password" type={"password"} className={pageStyles.loginInput} value={password}
                   onChange={e => setPassword(e.target.value)}/>
        </label>
        {error && <div className={pageStyles.loginErrorLabel}>{error}</div>}

        <button className={pageStyles.loginButton}>Войти</button>
    </form>
}