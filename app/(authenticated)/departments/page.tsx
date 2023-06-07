import cardStyles from "styles/card.module.css"
import DepartmentCard from "./card";
import DepartmentTable from "./department_table";
import {Department} from "requests/hr_service/types";
import readDepartments from "../../../requests/hr_service/departments/get";

export default async function Page() {
    const departments = await readDepartments()

    return <DepartmentTable>
        {departments.map(department => (
            <DepartmentCard department_title={department.title}/>
        ))}
    </DepartmentTable>
}