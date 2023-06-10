import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";
import OccupationCard from "./card";

export default function Page({params}: { params: { title: string } }) {
    return <div>
        <DepartmentTabs selectedTab={"occupations"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            <OccupationCard/>
            <OccupationCard/>
            <OccupationCard/>
        </div>
    </div>
}