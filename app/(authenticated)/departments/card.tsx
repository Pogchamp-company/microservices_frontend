import cardStyles from "styles/card.module.css"
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function DepartmentCard({department_title}: {
    department_title: string
}) {
    return <Link href={`/departments/${department_title}`}>
        <div className={cardStyles.card}>
            <div><b>Отдел {department_title}</b></div>
            <div><span> 0 </span><FontAwesomeIcon icon={faUser}/></div>
        </div>
    </Link>
}
