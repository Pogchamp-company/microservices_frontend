import {Department} from "../types";
import RequestError from "../../base_error";
import {hr_service_api_url} from "../base";
import getAuthHeaders from "../../base_headers";

export default async function readDepartments(): Promise<Department[]> {
        const response = await fetch(`${hr_service_api_url}/departments`, {
        headers: getAuthHeaders(),
        cache: "no-cache",
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result.departments
}