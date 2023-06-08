import {cookies, headers} from "next/headers";

export default function getAuthHeaders(): { Accept: string, Authorization: string, "Content-Type": string } {
    const cookieStore = cookies();
    const access_token: string = cookieStore.get('access_token')?.value.toString() as string;

    return {
        "Authorization": access_token,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}