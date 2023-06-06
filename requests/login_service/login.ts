import {UserRole} from "./types";
import {login_service_api_url} from "./base";
import RequestError from "../base_error";

type LoginResponse = {
    token: string,
    roles: UserRole[]
}

export default async function login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch(`${login_service_api_url}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify({
            email,
            password
        })
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result
}