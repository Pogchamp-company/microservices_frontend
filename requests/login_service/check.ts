import {UserRole} from "./types";
import {login_service_api_url} from "./base";
import getAuthHeaders from "../base_headers";
import RequestError from "../base_error";

type CheckTokenResponse = {
    email: string,
    roles: UserRole[]
}

export default async function check_token(): Promise<CheckTokenResponse | undefined> {
    console.log('checking')
    const response = await fetch(`${login_service_api_url}/auth/check`, {
        headers: getAuthHeaders(),
        cache: "no-store",
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result
}