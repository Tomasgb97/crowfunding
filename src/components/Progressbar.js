import styles from '../progressbar.module.css'

const Progressbar = ({completed}) => {


    const fill = {

        height: '100%',
        width: `${(completed * 100) / 100000}%`,
        backgroundColor: '#137A73',
        borderRadius: 'inherit',
        textAlign: 'right',
        maxWidth: '100%'
    }

    return(

        <div className={styles.container}>
            <div style={fill}>
                <span></span>
            </div>
        </div>
    )
}

export default Progressbar