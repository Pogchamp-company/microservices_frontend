import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";

export default function Page({params}: { params: { title: string } }) {
    return <div>
        <DepartmentTabs selectedTab={"vacancies"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            <div className={cardStyles.card}>vacancies</div>
        </div>
    </div>
}