import cardStyles from "styles/card.module.css"
import rowStyles from "styles/row.module.css"
import formatDate from "../../../../utils/format_date";

export default function TaskCard({
                                     taskName,
                                     taskStart,
                                     taskEnd,
                                     taskDeadline,
                                     taskPerformer
                                 }: {
    taskName: string,
    taskStart: Date | null,
    taskEnd: Date | null,
    taskDeadline: Date | null,
    taskPerformer: string,
}) {
    return <div className={cardStyles.card}>
        <div>{taskName}</div>
        <div>Исполнитель: {taskPerformer}</div>
        <div className={rowStyles.row}>
            {taskStart && <div>Начало: {formatDate(taskStart)}</div>}
            {taskEnd && <div>Конец: {formatDate(taskEnd)}</div>}
            {taskDeadline && <div>Крайний срок: {formatDate(taskDeadline)}</div>}
        </div>
    </div>
}