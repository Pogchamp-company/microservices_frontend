import {ReactNode} from "react";
import contentStyles from "./content.module.css"

export default function Content({children}: { children: ReactNode }) {
    return <div className={contentStyles.content}>
        {children}
    </div>
}