import styles from '../menu.module.css'
import { useState } from 'react'
import EnterPledge from './EnterPledge';

const Menu = ({menu, blackleft, bambooleft, handleSupport, toggledonatedsign}) =>{

    const [selected, setselected] = useState('');

    const handleclick = (e) =>{

        setselected(e.target.value);
       console.log(selected)
        
    }

   

    return(

        <div className={styles.bigcontainer}>
            <div onClick={menu} className={styles.bigbackground}></div>

            <div className={styles.menucard}>
                <div className={styles.header}>
                    <h1>Back this project</h1>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world ?</p>
                </div>

                <label  htmlFor='input1'>
                    <div className={ selected === 'input1' ? styles.cardcolumnselected : null} >
                <div className={selected === 'input1' ? styles.cardselected : styles.card}>
                    <input onClick={handleclick} value='input1' name='option' id='input1' className={styles.cardradio} type='radio'></input>
                    <div>
                        <h3>Pledge with no reward</h3>
                        <p className={styles.cardtext}>Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to recieve product updates via email.
                        </p>
                    </div>
                </div>
                {selected === 'input1' ? <EnterPledge toggledonated={toggledonatedsign} menu={menu} product='none' def={1} handleSupport={handleSupport}></EnterPledge>: null}
                </div>
                </label>




                <br></br>



                <label  htmlFor='input2'>
                <div className={ selected === 'input2' ? styles.cardcolumnselected : null} >
                    <div className={selected === 'input2' ? styles.cardselected : styles.card}>
                    <input onClick={handleclick} value='input2' name='option' id='input2' className={styles.cardradio} type='radio'></input>
                    <div>
                        <div className={styles.titleflex}>
                            <div className={styles.titleflex2}>
                            <h3>Bamboo Stand</h3><p>Pledge $25 or more</p>
                            </div>
                            <div className={styles.left}>
                                <h4>{bambooleft}</h4><p>left</p></div>
                                </div>
                        <p className={styles.cardtext}>You get an ergonomic stand made of natural bamboo. You've helped us launch
                        our promotional campaign, and you'll be added to a special Backer member list.
                        </p>
                        </div>
                    </div>
                    {selected === 'input2' ? <EnterPledge toggledonated={toggledonatedsign} menu={menu} product='bamboo' def={25} handleSupport={handleSupport}  min={25} max={75}></EnterPledge>: null}
                </div>
                </label>



                <br></br>



                <label  htmlFor='input3'>
                <div  className={ selected === 'input3' ? styles.cardcolumnselected : null} >
                    <div className={selected === 'input3' ? styles.cardselected : styles.card}>
                    <input onClick={handleclick} value='input3' name='option' id='input3' className={styles.cardradio} type='radio'></input>
                    <div>
                        <div className={styles.titleflex}>
                            <div className={styles.titleflex2}>
                                <h3>Black Edition Stand</h3><p>Pledge $75 or more</p>
                            </div>
                            <div className={styles.left}>
                                <h4>{blackleft}</h4><p>left</p></div>
                            </div>

                        <p className={styles.cardtext}>You get a Black Special Edition computer stand and a personal than you.
                        You'll be added to our Backer member list. Shipping is inlcuded.
                        </p>
                    </div>
                    </div>
                    {selected === 'input3' ? <EnterPledge toggledonated={toggledonatedsign} menu={menu} product='blackleft' def={75} handleSupport={handleSupport}  min={75} max={200}></EnterPledge>: null}
                </div>
                </label>




                <br></br>




                <div className={styles.carddisabled}>
                    <div>
                        <div className={styles.titleflex}>
                            <div className={styles.titleflex2dis}>
                            <h3>Mahogany Special Edition</h3><p>Pledge $200 or more</p>
                            </div>
                            <div className={styles.left}>
                                <h4>0</h4><p>left</p></div>
                                </div>

                        <p className={styles.cardtext}>You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you.
                        You'll be added to our Backer member list. Shipping is included.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu