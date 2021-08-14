import styles from '../pledge25.module.css'
import Button from './Button'

const Pledge75 = ({blackleft, menu}) => {

    return(

        <div className={styles.main}>
            <div className={styles.flexupper}>
                <h4>Black Edition Stand</h4>
                <p>Pledge $75 or more</p>
            </div>
            <p className={styles.text}>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            <div className={styles.flexlower}>
                <div className={styles.flexleft}>
                    <h3>{blackleft}</h3>
                    <p>left</p>
                </div>
                <Button menu={menu} text='Select Reward'></Button>
            </div>
        </div>
    )
}

export default Pledge75