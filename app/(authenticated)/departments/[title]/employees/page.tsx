import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";
import EmployeeCard from "./card";

export default function Page({params}: { params: { title: string } }) {
    return <div>
        <DepartmentTabs selectedTab={"employees"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            <EmployeeCard employeeName={"Черепанов Артемий Андреевич"}
                          occupationTitle={"Фронтендер"}/>
            <EmployeeCard employeeName={"Александров Роман Алексеевич"}
                          occupationTitle={"Сервер"}/>
            <EmployeeCard employeeName={"Головин Артём Александрович"}
                          occupationTitle={"Прокси"}/>
        </div>
    </div>
}