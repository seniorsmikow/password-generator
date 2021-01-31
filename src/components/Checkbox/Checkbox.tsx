import React from 'react'
//import cx from 'clsx'
import styles from './Checkbox.module.css'

type PropsType = {
    type: string
    handleCheckbox: () => void

}

const Checkbox: React.FC<PropsType> = ({type, handleCheckbox}) => {
    return (
        <div className={styles.checkbox}>
            <input 
                type={type}
                onChange={handleCheckbox}
            />
        </div>
    )
}

export default Checkbox