'use server'
import {hr_service_api_url} from "../base";
import getAuthHeaders from "../../base_headers";
import RequestError from "../../base_error";

export default async function createDepartment(title: string): Promise<void> {
    const response = await fetch(`${hr_service_api_url}/departments`, {
        headers: getAuthHeaders(),
        cache: "no-cache",
        method: 'POST',
        body: JSON.stringify({
            title,
        })
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result
}