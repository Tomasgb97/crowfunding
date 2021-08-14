import styles from '../pledge200.module.css'
import Button from './Button'

const Pledge200 = () => {

    return(

        <div className={styles.main}>
            <div className={styles.flexupper}>
                <h4>Mahogany Special Edition</h4>
                <p>Pledge $200 or more</p>
            </div>
            <p className={styles.text}>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            <div className={styles.flexlower}>
                <div className={styles.flexleft}>
                    <h3>0</h3>
                    <p>left</p>
                </div>
                <Button disable={true} text='Select Reward'></Button>
            </div>
        </div>
    )
}

export default Pledge200