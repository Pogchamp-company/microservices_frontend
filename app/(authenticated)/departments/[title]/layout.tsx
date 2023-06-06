import {ReactNode} from "react";
import departmentStyles from "./layout.module.css";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

export default async function Layout({params, children}: { params: { title: string }, children: ReactNode }) {
    // const data = await check_token('eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmUiOiJ7XCJzZWNzX3NpbmNlX2Vwb2NoXCI6MTY4NjAwMjM3MSxcIm5hbm9zX3NpbmNlX2Vwb2NoXCI6MzMzNDM1NTc3fSIsInN1YiI6ImRpcmVjdG9yQHBvZ2NoYW1wLnJ1In0.OKXPALAtwnzu1ZoKbqyf8TALdBF1nWXnfhwyhPhjp0o')
    // console.log(data)
    return <>
        <h1 className={departmentStyles.departmentTitle}>Отдел {decodeURI(params.title)}</h1>
        {children}
    </>
}