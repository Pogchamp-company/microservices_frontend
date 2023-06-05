'use client'
import addButtonStyles from "./add_button.module.css"

export default function AddButton({onClick}: { onClick?: () => void }) {
    return <button className={addButtonStyles.addButton}
                   onClick={onClick}>+</button>
}