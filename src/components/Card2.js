
import styles from "../card2.module.css"
import Progressbar from "./Progressbar"


const Card2 = ({money, backers, days}) => {

    

    return(

        <div className={styles.main}>

            <div className={styles.flexcontainer}>
                <div className={styles.horizontalflex}>
                    <div className={styles.columncontent}>
                        <p className={styles.columnnumbers}>${money}</p>
                        <p className={styles.columnpara}>of $100.000 backed</p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.columncontent}>
                        <p className={styles.columnnumbers}>{backers}</p>
                        <p className={styles.columnpara}>Total backers</p>
                    </div>
                    
                    <div className={styles.divider}></div>

                    <div className={styles.columncontent}>
                        <p className={styles.columnnumbers}>{days}</p>
                        <p className={styles.columnpara}>days left</p>
                    </div>

                </div>
                <div className={styles.progresscontainer}>
                    <Progressbar completed={money}></Progressbar>
                </div>
            </div>

        </div>
    )
}

export default Card2