import React from 'react'
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import Select from '../Select/Select'
import styles from './Generator.module.css'
import FileCopyIcon from '@material-ui/icons/FileCopy';

type PropsType = {
    passwordsLengthOptions: Array<number>
    result: string
    handleCheckbox: () => void
    handlePasswordLength: (event) => void
    handleChangePassword: () => void
    handlePasswordCopy: () => void
    copyAnimation: boolean
}

const Generator: React.FC<PropsType> = ({passwordsLengthOptions, 
                                        result, 
                                        handleCheckbox, 
                                        handlePasswordLength, 
                                        handleChangePassword, 
                                        handlePasswordCopy,
                                        copyAnimation
                                        }) => {


    return (
        <div className={styles.root__generator}>

            { copyAnimation ? <div className={styles.copyText}>Copy!!!</div> : null }

            <div className={styles.generator__input}>
                <Input 
                    defaultValue={result}
                    readOnly={true}
                />
                <div className={styles.generator__copy_icon}>
                    <FileCopyIcon color='action' onClick={handlePasswordCopy}/>
                </div>
            </div>

            <div className={styles.generator__checkbox}>
                Использовать спецсимволы 
                <Checkbox 
                    type="checkbox" 
                    handleCheckbox={handleCheckbox}
                />
            </div>

            <div className={styles.generator__select}>
                Длина пароля
                <Select 
                    options={passwordsLengthOptions} 
                    handlePasswordLength={handlePasswordLength}
                />
            </div>

            <div className={styles.generator__button}>
                <Button 
                    text={"Сгенерировать пароль"} 
                    handleChangePassword={handleChangePassword}
                />
            </div>

        </div>
    )
}

export default Generator