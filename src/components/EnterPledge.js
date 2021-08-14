import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../pledge.module.css'


function EnterPledge({min, max, def, handleSupport, product, menu, toggledonated}) {

    const [mydonation, setmydonation] = useState(0);

    const handleDonation = (e) => {

        setmydonation(parseInt(e.target.value))

    }

    useEffect(() => {
        setmydonation(def)
        
    }, [])


    return (
        <form>
        <div className={styles.main}>
            
            <p className={styles.enter}>Enter your pledge</p>
            <div className={styles.flexcont}>
                <div className={styles.flexmoney} >
                    <p>$</p>
                    <input defaultValue={def} onChange={handleDonation} type='number' min={min} max={max}></input>
                </div>
                <button type='submit' onClick={(e) => {e.preventDefault()
                handleSupport(mydonation, product)
                setmydonation(0)
                menu()
                toggledonated()
                }} className={styles.continuebttn}>
                    Continue
                </button>
            </div>
        </div>
        </form>
    )
}

export default EnterPledge
