import logo from "../images/logo-mastercraft.svg"
import styles from "../card1.module.css"
import Button from "./Button"
import bookmark from "../images/icon-bookmark.svg"
import { useState } from "react"

const Card1 =({menu}) => {

    const [bookmarked, setbookmarked] = useState(false);

    const togglebookmark = () => {

        setbookmarked(!bookmarked)
    }

    return(

        <div className={styles.main}>
            <div className={styles.imgdiv}>
                <img src={logo}></img>
            </div>
            <div className={styles.textdiv}>
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <span> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</span>
            </div>
            
            <div className={styles.belowcontainer}>
                <Button menu={menu} text="Back this project"></Button>

                <div className={bookmarked ? styles.bookmarkselect : styles.bookmarkdiv} onClick={togglebookmark}>
                    <img src={bookmark}></img>
                    <p>{bookmarked ? 'Bookmarked' : 'Bookmark'}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Card1