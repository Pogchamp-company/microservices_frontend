import cardStyles from "styles/card.module.css"
import rowStyles from "styles/row.module.css"

export default function EmployeeCard({employeeName, occupationTitle}: {
    employeeName: string,
    occupationTitle: string,
}) {
    return <div className={cardStyles.card}>
        <div className={rowStyles.row}>
            <div>{employeeName}</div>
            <div>10.000Р/день</div>
        </div>
        <div>Должность: {occupationTitle}</div>
    </div>
}