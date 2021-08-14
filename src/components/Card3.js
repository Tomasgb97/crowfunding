import styles from '../card3.module.css'
import Pledge200 from './Pledge200'
import Pledge25 from './Pledge25'
import Pledge75 from './Pledge75'

const Card3 = ({bambooleft, blackleft, menu}) => {

    return(

        <div className={styles.main}>

            <h3>About this project</h3>

            <p className={styles.text}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.
                 Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <br></br>
            <p className={styles.text}>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

            <Pledge25 menu={menu} bambooleft={bambooleft}></Pledge25>
            <br></br>
            <Pledge75 menu={menu} blackleft={blackleft}></Pledge75>
            <br></br>
            <Pledge200></Pledge200>
        </div>
    )
}

export default Card3