'use client'
import {ReactNode, useEffect, useState} from "react";
import cardStyles from "styles/card.module.css";
import editTableStyles from "styles/edit_table.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import AddDepartmentCard from "./add_department_card";
import transparentButtonStyles from "styles/transparent_button.module.css"
import departmentTableStyles from "./department_table.module.css"
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {User} from "../../../requests/hr_service/types";
import readDepartments from "../../../requests/hr_service/departments/get";
import DepartmentCard from "./card";
import {useInView} from "react-intersection-observer";

type DepartmentTableProps = {
    children: ReactNode
}

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await res.json()) as User[];
}

export default function DepartmentTable({children}: DepartmentTableProps) {
    const {data, isLoading, isFetching, error, fetchNextPage, hasNextPage, refetch} = useInfiniteQuery({
        queryKey: ["initial-users"],
        queryFn: ({pageParam = 0}) => readDepartments(pageParam),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) {
                return undefined
            }
            return pages.length
        }
    });
    console.log(data)

    const departments = data?.pages.flatMap(d => d)

    const [showCreateCard, setShowCreateCard] = useState(false)

    const {ref, inView, entry} = useInView({
        threshold: 0,
    });
    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])
    
    function closeAddDepartmentCard() {
        setShowCreateCard(false)
        refetch()
    }


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
                                loadMoreRef={(i === departments.length - 1 && hasNextPage) ? ref : null}/>
            ))}
            {children}
            {isLoading && <span>Погружаем...</span>}
        </div>
    </div>
}