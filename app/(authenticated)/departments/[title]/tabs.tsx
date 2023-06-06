import Link from "next/link";
import tabStyles from "./tabs.module.css"

export default function DepartmentTabs({departmentName, selectedTab}: { selectedTab: string, departmentName: string }) {
    const tabs = {
        "employees": "Сотрудники",
        "vacancies": "Вакансии",
        "employee_occupation": "Должности",
        "tasks": "Задачи",
        "statistics": "Инфографика",
    }

    return <div className={tabStyles.tabsList}>
        {Object.entries(tabs).map(([tabName, title]) => (
            <Link href={`/departments/${departmentName}/${tabName}`} className={tabStyles.tabItem}
                  data-selected={tabName === selectedTab} key={tabName}
                  replace={true}>
                {title}
            </Link>
        ))}
    </div>
}