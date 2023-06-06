'use client'
import pageStyles from "./page.module.css"
import {FormEvent, useState} from "react";
import login from "requests/login_service/login";
import {useRouter} from "next/navigation";

export default function Page() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {replace} = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const {token} = await login(email, password)
        document.cookie = `access_token=${token}`;
        replace('/departments')
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

        <button className={pageStyles.loginButton}>Войти</button>
    </form>
}