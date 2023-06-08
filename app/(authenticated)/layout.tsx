import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {ReactNode} from "react";
import check_token from "requests/login_service/check";
import RequestError from "../../requests/base_error";

export default async function Layout({children}: { children: ReactNode }) {

    const cookieStore = cookies();
    const access_token = cookieStore.get('access_token');
    if (access_token === undefined) {
        redirect('/login', RedirectType.replace)
    }

    try {
        await check_token()
    } catch (error) {
        if (error instanceof RequestError) {
            console.log(error)
            redirect('/login', RedirectType.replace)
        }
    }

    return <>{children}</>
}