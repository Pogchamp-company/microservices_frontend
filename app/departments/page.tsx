import cardStyles from "styles/card.module.css"
import DepartmentCard from "./card";

export default function Page() {
    return <div>
        <div className={cardStyles.cardList}>
            <DepartmentCard department_title={"IT"}/>
            <DepartmentCard department_title={"Gay bar"}/>
        </div>
    </div>
}