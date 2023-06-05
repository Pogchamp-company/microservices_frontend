import cardStyles from "styles/card.module.css"
import Link from "next/link";

export default function DepartmentCard({department_title}: {
    department_title: string
}) {
    return <Link href={`/departments/${department_title}`}>
        <div className={cardStyles.card}>
            <div>Отдел {department_title}</div>
        </div>
    </Link>
}
