import cardStyles from "styles/card.module.css"
import DepartmentTabs from "../tabs";
import TaskCard from "./card";

export default function Page({params}: { params: { title: string } }) {
    return <div>
        <DepartmentTabs selectedTab={"tasks"} departmentName={params.title}/>

        <div className={cardStyles.cardList}>
            <TaskCard taskName={"Setup project"}
                      taskStart={new Date()}
                      taskEnd={new Date()}
                      taskDeadline={new Date()}
                      taskPerformer={"Черепанов Артемий Андреевич"}/>
        </div>
    </div>
}