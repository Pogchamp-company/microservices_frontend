'use client'
import {ReactNode, useState} from "react";
import cardStyles from "styles/card.module.css";
import editTableStyles from "styles/edit_table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import AddDepartmentCard from "./add_department_card";
import transparentButtonStyles from "styles/transparent_button.module.css"
import departmentTableStyles from "./department_table.module.css"

type DepartmentTableProps = {
    children: ReactNode
}

export default function DepartmentTable({children}: DepartmentTableProps) {
    const [showCreateCard, setShowCreateCard] = useState(false)

    return <div>
        <div className={editTableStyles.editPanel}>
            <button onClick={() => setShowCreateCard(!showCreateCard)}
                    className={`${transparentButtonStyles.transparentButton} ${departmentTableStyles.addDepartmentButton}`}
                    data-opened={showCreateCard}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            <div className={editTableStyles.editPanelSearchContainer}>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder={"Поиск"}/>
            </div>
            <button className={transparentButtonStyles.transparentButton}>
                <FontAwesomeIcon icon={faFilter}/>
            </button>
        </div>
        <div className={cardStyles.cardList}>
            {showCreateCard && <AddDepartmentCard setShowCreateCard={setShowCreateCard}/>}
            {children}
        </div>
    </div>
}