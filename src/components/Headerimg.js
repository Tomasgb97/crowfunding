import styles from "../Headerimg.module.css"
import logo from "../images/logo.svg"
import menuburguer from "../images/burguer.svg"

const Headerimg = () => {

    return(

        <div className={styles.Headerimg}>
            <div className={styles.flex1}>
                <img src={logo}></img>
            <div className={styles.flex2}>
                <img className={styles.burguer} src={menuburguer}></img>
                <p>About</p>
                <p>Discover</p>
                <p>Get started</p>
            </div>
            </div>
        </div>
    )
}

export default Headerimg