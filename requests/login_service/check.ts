import {UserRole} from "./types";
import {login_service_api_url} from "./base";
import getAuthHeaders from "../base_headers";

type CheckTokenResponse = {
    email: string,
    roles: UserRole[]
}

export default async function check_token(): Promise<CheckTokenResponse | undefined> {
    const response = await fetch(`${login_service_api_url}/auth/check`, {
        headers: getAuthHeaders(),
        cache: "no-store",
    })

    try {
        return await response.json()
    } catch (e) {
        console.log(e)
        return undefined
    }
}