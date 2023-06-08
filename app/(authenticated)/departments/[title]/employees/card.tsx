import cardStyles from "styles/card.module.css"
import rowStyles from "styles/row.module.css"

interface EmployeeCardProps {
    employeeName: string,
    occupationTitle: string,
}

export default function EmployeeCard({employeeName, occupationTitle}: EmployeeCardProps) {
    return <div className={cardStyles.card}>
        <div className={rowStyles.row}>
            <div>{employeeName}</div>
            <div>10.000Р/день</div>
        </div>
        <div>Должность: {occupationTitle}</div>
    </div>
}