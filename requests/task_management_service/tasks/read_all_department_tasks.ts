import getClientAuthHeaders from "../../base_client_headers";
import RequestError from "../../base_error";
import {task_management_service_api_url} from "../base";

export default async function readAllDepartmentTasks(departmentTitle: string, page: number = 0) {
    const response = await fetch(`${task_management_service_api_url}/task/all/${departmentTitle}?page=${page}`, {
        headers: getClientAuthHeaders(),
        cache: "no-cache",
    })

    const result = await response.json()

    if (response.status !== 200) {
        throw new RequestError(response.status, result)
    }

    return result
}