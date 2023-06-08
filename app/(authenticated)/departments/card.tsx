import cardStyles from "styles/card.module.css"
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {forwardRef} from "react";

interface DepartmentCardProps {
    department_title: string
}

const DepartmentCard = forwardRef<HTMLDivElement, DepartmentCardProps>(({department_title}, ref) => {
    return <Link href={`/departments/${department_title}`}>
        <div className={cardStyles.card} ref={ref}>
            <div><b>Отдел {department_title}</b></div>
            <div><span> 0 </span><FontAwesomeIcon icon={faUser}/></div>
        </div>
    </Link>
})

export default DepartmentCard
