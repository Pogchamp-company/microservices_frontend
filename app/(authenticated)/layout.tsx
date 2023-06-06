import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {ReactNode} from "react";
import check_token from "requests/login_service/check";

export default async function Layout({children}: { children: ReactNode }) {

    const cookieStore = cookies();
    const access_token = cookieStore.get('access_token');
    if (access_token === undefined) {
        redirect('/login', RedirectType.replace)
    }
    const r = await check_token()
    console.log(r)

    return <>{children}</>
}