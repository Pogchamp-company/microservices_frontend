export default class RequestError extends Error {
    status: number
    response: number

    constructor(status: number, response: any = {}) {
        super(`Сервер вернул статус ${status} и сказал ${response}`);
        this.status = status
        this.response = response
    }
}

