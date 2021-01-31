import React from 'react'
import styles from './Input.module.css'

type PropsType = {
    defaultValue: string
    readOnly: boolean
}

const Input: React.FC<PropsType> = ({defaultValue, readOnly}) => {

    return (
        <div className={styles.input}>
            <input 
                defaultValue={defaultValue}
                readOnly={readOnly}
            />
        </div>
    )
}

export default Input 