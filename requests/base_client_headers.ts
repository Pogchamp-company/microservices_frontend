import {getCookie} from "cookies-next";

export default function getClientAuthHeaders():{Accept: string, Authorization: string, "Content-Type": string} {
    const access_token: string = getCookie('access_token') as string;

    return {
        "Authorization": access_token,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}