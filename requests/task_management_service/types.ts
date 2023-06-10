export type TaskStatus =
    "DRAFT" |
    "SENT" |
    "IN_PROGRESS" |
    "UNDER_REVIEW" |
    "DONE"

export type Task = {
    id: 0
    name: string
    status: TaskStatus
    deadline: string
    description: string
    start_date: string
    end_date: string
    creator: string
    performer: string
    department: string
}