import Link from "next/link";
import tabStyles from "./tabs.module.css"

interface DepartmentTabs {
    selectedTab: string,
    departmentName: string
}

const tabs = {
    "employees": "Сотрудники",
    "vacancies": "Вакансии",
    "employee_occupation": "Должности",
    "tasks": "Задачи",
    "statistics": "Инфографика",
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