import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";
import VacancyCard from "./card";

export default function Page({params}: { params: { title: string } }) {
    return <div>
        <DepartmentTabs selectedTab={"vacancies"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            <VacancyCard/>
            <VacancyCard/>
            <VacancyCard/>
        </div>
    </div>
}