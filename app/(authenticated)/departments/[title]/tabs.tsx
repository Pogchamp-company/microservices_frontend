import Link from "next/link";
import tabStyles from "./tabs.module.css"

type TabsList = "employees" | "vacancies" | "occupations" | "tasks" | "statistics"

const tabs: {[tabName: TabsList]: string} = {
    "employees": "Сотрудники",
    "vacancies": "Вакансии",
    "occupations": "Должности",
    "tasks": "Задачи",
    "statistics": "Инфографика",
}

interface DepartmentTabs {
    selectedTab: TabsList,
    departmentName: string
}

export default function DepartmentTabs(props: DepartmentTabs) {

    return <div className={tabStyles.tabsList}>
        {Object.entries(tabs).map(([tabName, title]) => (
            <Link href={`/departments/${props.departmentName}/${tabName}`}
                  className={tabStyles.tabItem}
                  data-selected={tabName === props.selectedTab}
                  key={tabName}
                  replace={true}>
                {title}
            </Link>
        ))}
    </div>
}