import React from 'react'
import styles from './Button.module.css'

type PropsType = {
    text: string
    handleChangePassword: () => void
}    

const Button: React.FC<PropsType> = ({text, handleChangePassword}) => {

    return (
        <div className={styles.button}>
            <button onClick={handleChangePassword}>{text}</button>
        </div>
    )
}

export default Button