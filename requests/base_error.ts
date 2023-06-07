export default class RequestError extends Error {
    status: number
    response: string

    constructor(status: number, response: any = {}) {
        response = response.detail ?? response
        super(`Сервер вернул статус ${status}: ${response}`);
        this.status = status
        this.response = response
    }
}

