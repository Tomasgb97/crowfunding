import styles from '../pledge25.module.css'
import Button from './Button'

const Pledge25 = ({bambooleft, menu}) => {

    return(

        <div className={styles.main}>
            <div className={styles.flexupper}>
                <h4>Bamboo Stand</h4>
                <p>Pledge $25 or more</p>
            </div>
            <p className={styles.text}> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
            <div className={styles.flexlower}>
                <div className={styles.flexleft}>
                    <h3>{bambooleft}</h3>
                    <p>left</p>
                </div>
                <Button menu={menu} text='Select Reward'></Button>
            </div>
        </div>
    )
}

export default Pledge25