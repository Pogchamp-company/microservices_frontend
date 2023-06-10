'use client'
import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";
import TaskCard from "./card";
import {useInfiniteQuery} from "@tanstack/react-query";
import readAllDepartmentTasks from "requests/task_management_service/tasks/read_all_department_tasks";
import {Task} from "requests/task_management_service/types";
import {dateFromServerString} from "../../../../../utils/format_date";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function Page({params}: { params: { title: string } }) {
    const {data, isLoading, fetchNextPage, hasNextPage, refetch} = useInfiniteQuery({
        queryKey: ["tasks"],
        queryFn: ({pageParam = 0}) => readAllDepartmentTasks(params.title, pageParam),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) {
                return undefined
            }
            return pages.length
        }
    });

    const tasks: Task[] = data?.pages.flatMap(d => d)

    // Infinite loading
    const {ref, inView} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])


    return <div>
        <DepartmentTabs selectedTab={"tasks"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            {tasks?.map((task, i) => (
                <TaskCard key={task.name}
                          taskName={task.name}
                          taskStart={dateFromServerString(task.start_date)}
                          taskEnd={dateFromServerString(task.end_date)}
                          taskDeadline={dateFromServerString(task.deadline)}
                          taskPerformer={task.performer}
                          ref={(i === tasks.length - 1 && hasNextPage) ? ref : null}/>
            ))}
        </div>
    </div>
}