import React, {HTMLInputTypeAttribute} from "react";
import cn from 'classnames';
import ConfirmLogo from '../../assert/icons/confirm.svg';
import styles from "./Input.module.scss";


export enum CustomInputTypes {
    Login = 'Login',
    Password = 'password',
    Search = 'search',
    Profile = 'profile',
}

export type CustomInputProps = {
    type: HTMLInputTypeAttribute,
    styleLabel?: string,
    error?: boolean,
    confirm?: boolean,
    view?: CustomInputTypes,
    inputCustom?: boolean,
    placeholder: string,
    title?: string,
    name: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void,
}

export const CustomInput = ({
    type,
    view,
    styleLabel,
    error,
    confirm,
    inputCustom,
    placeholder,
    title,
    name,
    value,
    onChange,
    onBlur,
}: CustomInputProps) => {
    return(
        <>
            <label htmlFor={name} className={cn(
                styles.inputLabel,
                {
                    [styles.error]:error,
                    [styles.confirm]: confirm
                }
                )}>

                <p className={styleLabel}>{title}</p>
                <input
                    className={
                        cn(styles[`inputCustom_${view}`],{
                            [styles.inputCustom]: inputCustom,
                            [styles.error]: error,
                            [styles.confirm]: confirm,
                        })
                    }
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                />
                {!error && confirm? <img className={styles.confirmImg} src={ConfirmLogo} alt="Confirm Logo"/>:null}
            </label>

        </>
    );
};
