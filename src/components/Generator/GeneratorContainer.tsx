import React, { useState } from 'react'
import styles from './GeneratorContainer.module.css'
import Generator from './Generator'


const GeneratorContainer = () => {

    let passwordsLengthOptions = [10, 12, 14, 15, 16]

    let [result, setResult] = useState('')
    let [passwordLength, setPasswordLength] = useState(passwordsLengthOptions[0])
    let [checkboxType, setCheckboxType] = useState(false)
    let [copyAnimation, setCopyAnimation] = useState(false)

    let symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ'
    let specialSymbols = '!@#$%^&*()_<>/?'

    if(checkboxType) {
        symbols += specialSymbols
    }

    const handleChangePassword = () => {

        let currentResult = ''

        for(let i = 0; i < passwordLength; i++) {
            let rundom = Math.floor(Math.random() * symbols.length)
            currentResult += symbols.substring(rundom, rundom + 1)
        }
        setResult(currentResult)
    }

    const handleCheckbox = () => {
        setCheckboxType(!checkboxType)
    }

    const handlePasswordLength = (event) => {
        setPasswordLength(event.target.value)
    }

    const handlePasswordCopy = () => {
        if(result) {
            let timerId: number
            navigator.clipboard.writeText(result).then(() => {
                setCopyAnimation(true)
                timerId = window.setTimeout(() => {
                    setCopyAnimation(false)
                    clearTimeout(timerId)
                }, 2000)
            })
            setResult('')
        }
    }

    
    return (
        <div className={styles.root}>
            <Generator 
                passwordsLengthOptions={passwordsLengthOptions}
                result={result}
                handleCheckbox={handleCheckbox}
                handlePasswordLength={handlePasswordLength}
                handleChangePassword={handleChangePassword}
                handlePasswordCopy={handlePasswordCopy}
                copyAnimation={copyAnimation}
            />
        </div>
    )
}

export default GeneratorContainer