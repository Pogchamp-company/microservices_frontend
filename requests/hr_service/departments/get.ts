import {Department} from "../types";
import RequestError from "../../base_error";
import {hr_service_api_url} from "../base";
import getClientAuthHeaders from "../../base_client_headers";

export default async function readDepartments(page: number = 0): Promise<Department[]> {
    const response = await fetch(`${hr_service_api_url}/departments?page=${page}`, {
        headers: getClientAuthHeaders(),
        cache: "no-cache",
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result.departments
}