import React, {FormEvent, useEffect, useState} from "react";
import cn from 'classnames';
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import style from "./Login.module.scss";
import {CustomInputTypes} from "../../components/Input/Input";
import Heading, {Color, HeadingLevel} from "../../components/Heading/Heading";
import {ButtonTypes} from "../../components/Button/Button";
import {API} from "../../api/api";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [forms, setForm] = useState({
        login:'',
        password:'',
    });
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [confirmLogin, setConfirmLogin] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/profile');
        }
    }, []);

    const resetForms = () => {
        setForm({
                login:'',
                password:'',
            }
        )
        setErrorPassword(false)
        setErrorLogin(false)
        setConfirmLogin(false)
        setConfirmPassword(false)
    };
    const handleFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'login':
                if (forms.login.length < 10){
                    setErrorLogin(true)
                    setConfirmLogin(false)
                } else{
                    setErrorLogin(false)
                    setConfirmLogin(true)
                }
                break;
            case 'password':
                if (forms.password.length < 8){
                    setErrorPassword(true)
                    setConfirmPassword(false)
                } else{
                    setErrorPassword(false)
                    setConfirmPassword(true)
                }
                break;
            default:
                break;
        }

    };

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (confirmPassword && confirmLogin && !errorLogin && !errorPassword){
            console.log('#####:form ',forms)
            resetForms()
        }
    };

    const handleSubmit = async ({login, password}: { login: string, password: string }) => {
        const data = await API.login(login, password);
        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/profile');
        }
    }

    return(
        <>
            <div className={cn(style.container)}>
                <Heading level={HeadingLevel.Two} color={Color.Black}>Авторизация</Heading>
                <form
                    onSubmit={handleFormSubmit}
                >
                    <div className={style.inputWrap}>
                        <CustomInput
                            confirm={confirmLogin}
                            error={errorLogin}
                            inputCustom={true}
                            title={'Имя'}
                            type={'text'}
                            name={'login'}
                            placeholder={'Введите имя'}
                            value={forms.login}
                            onChange={handleChangeValue}
                            onBlur={handleFocusEvent}
                        />
                        {errorLogin ? <div className={style.error}><p>Неверное Имя</p></div>: null}
                    </div>
                    <div className={style.inputWrap}>
                        <CustomInput
                            confirm={confirmPassword}
                            error={errorPassword}
                            inputCustom={true}
                            title={'Пароль'}
                            type={'password'}
                            name={'password'}
                            placeholder={'Введите пароль'}
                            value={forms.password}
                            onChange={handleChangeValue}
                            onBlur={handleFocusEvent}
                        />
                        {errorPassword ? <div className={style.error}><p>Неверный пароль</p></div>: null}
                    </div>
                    <div className={cn(style.rememberMe)}>
                        <label className={style.customCheckBox}>
                            <input className={style.hiddenCheckBox} type="checkbox"/>
                            <div className={style.checkBox}>
                                <svg className={style.checkMark} width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 0C1.39543 0 0.5 0.895431 0.5 2V14C0.5 15.1046 1.39543 16 2.5 16H14.5C15.6046 16 16.5 15.1046 16.5 14V2C16.5 0.895431 15.6046 0 14.5 0H2.5ZM14.0303 5.03033C14.3232 4.73744 14.3232 4.26256 14.0303 3.96967C13.7374 3.67678 13.2626 3.67678 12.9697 3.96967L7 9.93934L4.53033 7.46967C4.23744 7.17678 3.76256 7.17678 3.46967 7.46967C3.17678 7.76256 3.17678 8.23744 3.46967 8.53033L6.46967 11.5303C6.76256 11.8232 7.23744 11.8232 7.53033 11.5303L14.0303 5.03033Z" fill="#009CB4"/>
                                </svg>
                            </div>
                            <span>Запомнить меня на этом компьютере</span>
                        </label>
                    </div>
                    <div className={style.buttonWrap}>
                        <Button name='Вход' onClick={() => handleSubmit(forms)} />
                        <a className={style.resetPassword} href={'#'}>Забыли свой пароль?</a>
                    </div>
                    <div>
                        <Button
                            name='Авторизация с использованием ЕС ИФЮЛ'
                            view = {ButtonTypes.OutlinedPrimery}
                            onClick={() => {}} />
                        <Button
                            name='Авторизация с использованием МСИ'
                            view = {ButtonTypes.OutlinedPrimery}
                            onClick={() => {}} />
                    </div>
                </form>
            </div>
        </>
    )
}


export default Login;