import React from 'react'
//import styles from './Select.module.css'
//import cx from 'clsx'

type PropsType = {
    options: Array<any>
    handlePasswordLength: (event) => void
}

const Select: React.FC<PropsType> = ({options = [], handlePasswordLength}) => {

    return (
        <div>
            <select onBlur={handlePasswordLength}>
                {options.map((el, index) => {
                    return (
                        <option key={index}>{el}</option>
                    )}
                )}
            </select>
        </div>
    )
}

export default Select