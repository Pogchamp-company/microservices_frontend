import cardStyles from "styles/card.module.css"
import rowStyles from "styles/row.module.css"
import formatDate from "utils/format_date";

interface TaskCardProps {
    taskName: string,
    taskStart: Date | null,
    taskEnd: Date | null,
    taskDeadline: Date | null,
    taskPerformer: string,
}

export default function TaskCard(props: TaskCardProps) {
    return <div className={cardStyles.card}>
        <div>{props.taskName}</div>
        <div>Исполнитель: {props.taskPerformer}</div>
        <div className={rowStyles.row}>
            {props.taskStart && <div>Начало: {formatDate(props.taskStart)}</div>}
            {props.taskEnd && <div>Конец: {formatDate(props.taskEnd)}</div>}
            {props.taskDeadline && <div>Крайний срок: {formatDate(props.taskDeadline)}</div>}
        </div>
    </div>
}