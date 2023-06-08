import {ReactNode} from "react";
import departmentStyles from "./layout.module.css";

export default async function Layout({params, children}: { params: { title: string }, children: ReactNode }) {
    return <>
        <h1 className={departmentStyles.departmentTitle}>Отдел {decodeURI(params.title)}</h1>
        {children}
    </>
}