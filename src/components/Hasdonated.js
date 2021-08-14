import React from 'react'
import styles from "../hasdonated.module.css"
import Button from './Button'
import okimg from "../images/icon-check.svg"
import close from "../images/icon-close-menu.svg"

function Hasdonated({toggle}) {
    return (
            <div className={styles.bigcontainer}>
            <div className={styles.bigbackground}></div>

            <div className={styles.main}>
                <img onClick={toggle} className={styles.close} src={close}></img>
                <img className={styles.okimg} src={okimg}></img>
                <h2>Thanks for your support !</h2>
                <p className={styles.text}>Your pledge brings us one step closer to sharing Mastercrat Bamboo Monitor Riser
                     worldwide. You will get an email once our campaign is completed.
                </p>
                <Button menu={toggle} text="Got it!"></Button>
                
            </div>

            
            </div>

    )
}

export default Hasdonated
