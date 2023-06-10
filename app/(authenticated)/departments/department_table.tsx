'use client'
import {useEffect, useState} from "react";
import cardStyles from "styles/card.module.css";
import editTableStyles from "styles/edit_table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import AddDepartmentCard from "./add_department_card";
import transparentButtonStyles from "styles/transparent_button.module.css"
import departmentTableStyles from "./department_table.module.css"
import {useInfiniteQuery} from "@tanstack/react-query";
import readDepartments from "../../../requests/hr_service/departments/get";
import DepartmentCard from "./card";
import {useInView} from "react-intersection-observer";

interface DepartmentTableProps {}

export default function DepartmentTable() {
    const {data, isLoading, fetchNextPage, hasNextPage, refetch} = useInfiniteQuery({
        queryKey: ["departments"],
        queryFn: ({pageParam = 0}) => readDepartments(pageParam),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) {
                return undefined
            }
            return pages.length
        }
    });

    // plain array of departments
    const departments = data?.pages.flatMap(d => d)

    // Flag should create department be displayed
    const [showCreateCard, setShowCreateCard] = useState(false)

    function closeAddDepartmentCard() {
        setShowCreateCard(false)
        refetch()
    }

    // Infinite loading
    const {ref, inView} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])


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
            {showCreateCard && <AddDepartmentCard closeAddDepartmentCard={closeAddDepartmentCard}/>}
            {departments && departments.map((department, i) => (
                <DepartmentCard key={department.title} department_title={department.title}
                                ref={(i === departments.length - 1 && hasNextPage) ? ref : null}/>
            ))}
            {isLoading && <span>Погружаем...</span>}
        </div>
    </div>
}