import cardStyles from "styles/card.module.css"
import underlineInputStyles from "styles/underline_input.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import rowStyles from "styles/row.module.css"
import transparentButtonStyles from "../../../styles/transparent_button.module.css";
import createDepartment from "../../../requests/hr_service/departments/post";
import {useState} from "react";

interface AddDepartmentCard {
    closeAddDepartmentCard: () => void
}

export default function AddDepartmentCard(props: AddDepartmentCard) {
    const [title, setTitle] = useState("")

    async function submitDepartment() {
        await createDepartment(title);
        props.closeAddDepartmentCard()
    }

    return <div className={cardStyles.card + " " + rowStyles.row}>
        <b>
            <span>Отдел </span>
            <input className={underlineInputStyles.underlineInput}
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                   autoFocus={true}/>
        </b>
        <button className={transparentButtonStyles.transparentButton} onClick={submitDepartment}>
            <FontAwesomeIcon icon={faSave}/>
        </button>
    </div>

}