import { useState } from "react"
import styles from "../Button.module.css"

const Button =({text, disable, menu})=> {

    const [disabled, setDisabled] = useState(disable)

    return(

        <button onClick={menu} disabled={disable ? true : false} className={disable ? styles.buttondis : styles.button}>
            <p>{text}</p>
        </button>
    )
}

export default Button