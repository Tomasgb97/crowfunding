import { useState } from 'react'
import styles from '../Container.module.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Menu from './Menu'
import Headerimg from './Headerimg'
import Hasdonated from './Hasdonated'


const Container = () => {


    const [state, setstate] = useState({
        money: 44000,
        backers: 5007,
        days: 56,
        bambooleft: 101,
        blackleft: 64
    });

    const handleSupport = (dolars, product) => {


        let x;
        let y;
        if(product === 'bamboo'){

             x = 1
             y = 0
        } else if(product === 'blackleft') { 
        
            x = 0
            y = 1}
            else { 
            x = 0
            y = 0}

        setstate(prevstate => {
            return { ...prevstate,
            money: parseInt(prevstate.money + dolars),
            backers: parseInt(prevstate.backers + 1),
            bambooleft: parseInt(prevstate.bambooleft - x),
            blackleft: parseInt(prevstate.blackleft - y)}

        })

    }

    const [donatedsign, setdonatedsign] =useState(false);

    const toggledonatedsign = () => {

        setdonatedsign(!donatedsign)
    }

    const [menu, setmenu] = useState(false);

    const openclosemenu = () => {setmenu(!menu);}

    return(
        <div className={styles.Container}>
            {donatedsign ? <Hasdonated toggle={toggledonatedsign}></Hasdonated> : null}
            {menu ? <Menu toggledonatedsign={toggledonatedsign} handleSupport={handleSupport} menu={openclosemenu} {...state}></Menu> : null}
            <Headerimg/>
            <div className={styles.mainContain}>
                <Card1 menu={openclosemenu}></Card1>
                <br></br>
                <Card2 money={state.money} backers={state.backers} menu={openclosemenu} days={state.days}></Card2>
                <br></br>
                <Card3 bambooleft={state.bambooleft} menu={openclosemenu} blackleft={state.blackleft}></Card3>

                <footer className={styles.footer}>
                    <h2>Made by <a href="https://www.linkedin.com/in/tom%C3%A1s-g%C3%B3mez-belcastro-814b9261/">Tomas Gomez Belcastro</a></h2>
                </footer>
            </div>
        </div>
    )
}

export default Container