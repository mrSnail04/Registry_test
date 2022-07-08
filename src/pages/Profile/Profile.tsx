import React, {FormEvent, useState} from "react";
import Heading, {Color, HeadingLevel} from "../../components/Heading/Heading";
import User from "../../assert/icons/user.png";
import {CustomInput, CustomInputTypes} from "../../components/Input/Input";
import styles from "./Profile.module.scss";
import Button, {ButtonTypes} from "../../components/Button/Button";
import cn from "classnames";

const Profile = () => {
    const [forms, setForm] = useState({
        name:'',
        secondName:'',
        patronymic:'',
        country:'',
        city:'',
        phone:'',
        password:'',
        repeatPassword:'',
    });

    const [hiddenPassword, setHiddenPassword] = useState( true)
    const [hiddenRepeatPassword, setHiddenRepeatPassword] = useState( true)

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('#####:form ',forms)
    };

    const handleClickPasswordIcon = () => {
        setHiddenPassword(!hiddenPassword)
    };
    const handleClickRepeatPasswordIcon = () => {
        setHiddenRepeatPassword(!hiddenRepeatPassword)
    };

    return(
        <div>
            <div className={styles.profileWrap}>
                <div className={styles.profileMenuWrap}>
                    <Heading level={HeadingLevel.Two}>
                        Личный кабинет
                    </Heading>
                    <div className={styles.menuWrap}>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Мои данные'}/>
                            <svg width="32" fill='none' height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M16.0003 14.6667C19.307 14.6667 22.0003 11.9733 22.0003 8.66667C22.0003 5.36 19.307 2.66667 16.0003 2.66667C12.6937 2.66667 10.0003 5.36 10.0003 8.66667C10.0003 11.9733 12.6937 14.6667 16.0003 14.6667ZM16.0003 5.33333C17.8403 5.33333 19.3337 6.82667 19.3337 8.66667C19.3337 10.5067 17.8403 12 16.0003 12C14.1603 12 12.667 10.5067 12.667 8.66667C12.667 6.82667 14.1603 5.33333 16.0003 5.33333Z" fill="#676A71"/>
                                <path className={styles.svg} d="M20.0003 16H12.0003C9.05366 16 6.66699 18.3867 6.66699 21.3333V22.6667C6.66699 25.6133 9.05366 28 12.0003 28H20.0003C22.947 28 25.3337 25.6133 25.3337 22.6667V21.3333C25.3337 18.3867 22.947 16 20.0003 16ZM22.667 22.6667C22.667 24.1333 21.467 25.3333 20.0003 25.3333H12.0003C10.5337 25.3333 9.33366 24.1333 9.33366 22.6667V21.3333C9.33366 19.8667 10.5337 18.6667 12.0003 18.6667H20.0003C21.467 18.6667 22.667 19.8667 22.667 21.3333V22.6667Z" fill="#676A71"/>
                            </svg>
                        </div>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Уведомления'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M26.6265 19.8133L25.8665 14.2666C25.2398 9.63994 21.6665 6.05328 17.3198 5.43994V4.01335C17.3198 3.28001 16.7198 2.68001 15.9865 2.68001C15.2532 2.68001 14.6532 3.28001 14.6532 4.01335V5.43994C10.3065 6.06661 6.75983 9.63994 6.11983 14.2666L5.35984 19.8133C5.15984 21.2533 5.58649 22.6933 6.53316 23.76C7.42649 24.7733 8.69317 25.3599 10.0265 25.3599H11.4265C11.7198 27.5866 13.6132 29.32 15.9198 29.32C18.2265 29.32 20.1198 27.5866 20.4132 25.3599H21.9198C23.2532 25.3599 24.5198 24.7733 25.4132 23.76C26.3598 22.68 26.7865 21.24 26.5865 19.8133H26.6265ZM15.9465 26.6667C15.1065 26.6667 14.4132 26.12 14.1598 25.3733H17.7332C17.4798 26.12 16.7865 26.6667 15.9465 26.6667ZM23.4398 22.0133C23.0532 22.4533 22.5198 22.7066 21.9465 22.7066H10.0398C9.4665 22.7066 8.9465 22.4667 8.5465 22.0133C8.11984 21.52 7.91983 20.84 8.01316 20.1733L8.77317 14.6266C9.27984 10.8533 12.3865 8 15.9998 8C19.6132 8 22.7065 10.8533 23.2265 14.6266L23.9865 20.1733C24.0798 20.84 23.8798 21.52 23.4532 22.0133H23.4398Z" fill="#676A71"/>
                            </svg>
                        </div>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Реестры'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M21.3467 4H10.6667C6.98667 4 4 6.98667 4 10.6667V21.3467C4 25.0267 6.98667 28.0133 10.6667 28.0133H21.3467C25.0267 28.0133 28.0133 25.0267 28.0133 21.3467V10.6667C28.0133 6.98667 25.0267 4 21.3467 4ZM15.16 15.96L13.3333 16.8534V6.66667H18.68V16.8534L16.8533 15.96C16.32 15.6933 15.6933 15.6933 15.16 15.96ZM25.3467 21.3333C25.3467 23.5333 23.5467 25.3333 21.3467 25.3333H10.6667C8.46667 25.3333 6.66667 23.5333 6.66667 21.3333V10.6533C6.66667 8.45332 8.45332 6.66665 10.6533 6.65332V18.0533C10.6533 18.7066 10.9867 19.3067 11.5467 19.6667C12.12 20.0267 12.8133 20.0534 13.4133 19.7734L15.9867 18.52L18.56 19.7734C18.8266 19.9067 19.12 19.9733 19.4 19.9733C19.76 19.9733 20.1067 19.88 20.4267 19.68C20.9867 19.3333 21.32 18.7333 21.32 18.0666V6.66667C23.52 6.66667 25.32 8.46667 25.32 10.6667V21.3467L25.3467 21.3333Z" fill="#676A71"/>
                            </svg>
                        </div>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Метаданные'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M26.8402 11.6133L20.2669 5.03996C19.6002 4.37329 18.6935 4 17.7469 4H11.8936C7.48022 4 3.89355 7.58667 3.89355 12V20C3.89355 24.4133 7.48022 28 11.8936 28H19.8936C24.3069 28 27.8936 24.4133 27.8936 20V14.1466C27.8936 13.2 27.5202 12.2933 26.8536 11.6266L26.8402 11.6133ZM19.5469 8.09334L23.8002 12.3467H21.6802C20.5069 12.3467 19.5469 11.4533 19.5469 10.3467V8.09334ZM19.8802 25.32H11.8802C8.93354 25.32 6.54688 22.9333 6.54688 19.9867V11.9867C6.54688 9.03999 8.93354 6.65332 11.8802 6.65332H16.8669V10.3467C16.8669 12.92 19.0269 15.0133 21.6669 15.0133H25.2002V19.9867C25.2002 22.9333 22.8135 25.32 19.8669 25.32H19.8802Z" fill="#676A71"/>
                            </svg>
                        </div>

                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Безопасность'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M15.9995 18.6533C14.9862 18.6533 14.1729 19.4666 14.1729 20.48C14.1729 21.4933 14.9862 22.3066 15.9995 22.3066C17.0128 22.3066 17.8262 21.4933 17.8262 20.48C17.8262 19.4666 17.0128 18.6533 15.9995 18.6533Z" fill="#676A71"/>
                                <path className={styles.svg} d="M21.5997 12H21.333V8C21.333 5.05333 18.9463 2.66667 15.9997 2.66667C13.053 2.66667 10.6663 5.05333 10.6663 8V12H10.3997C7.59966 12 5.33301 14.28 5.33301 17.0667V24.2533C5.33301 27.0533 7.61299 29.32 10.3997 29.32H21.5863C24.3863 29.32 26.653 27.04 26.653 24.2533V17.0667C26.653 14.2667 24.373 12 21.5863 12H21.5997ZM13.333 8C13.333 6.53333 14.533 5.33333 15.9997 5.33333C17.4663 5.33333 18.6663 6.53333 18.6663 8V12H13.333V8ZM23.9997 24.2667C23.9997 25.5867 22.9197 26.6667 21.5997 26.6667H10.413C9.093 26.6667 8.01302 25.5867 8.01302 24.2667V17.08C8.01302 15.76 9.093 14.68 10.413 14.68H21.5997C22.9197 14.68 23.9997 15.76 23.9997 17.08V24.2667Z" fill="#676A71"/>
                            </svg>
                        </div>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} name={'Мои загрузки'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M14.7999 23.48C14.9865 23.6666 15.2132 23.7866 15.4532 23.8666C15.6265 23.9466 15.8132 24 16.0132 24C16.2132 24 16.3999 23.9466 16.5599 23.8666C16.7999 23.7866 17.0265 23.6666 17.2132 23.48L24.2132 16.4666C24.7332 15.9466 24.7332 15.1067 24.2132 14.5867C23.6932 14.0667 22.8532 14.0667 22.3332 14.5867L17.3599 19.5867V4.01335C17.3599 3.28001 16.7732 2.68001 16.0265 2.68001C15.2799 2.68001 14.6932 3.28001 14.6932 4.01335V19.5867L9.70652 14.5999C9.18652 14.0799 8.34652 14.0799 7.82652 14.5999C7.30652 15.1199 7.30652 15.96 7.82652 16.48L14.8265 23.4933L14.7999 23.48Z" fill="#676A71"/>
                                <path className={styles.svg} d="M25.333 24C24.5997 24 23.9997 24.6 23.9997 25.3333C23.9997 26.2133 23.1997 26.68 22.453 26.68H9.51967C8.75967 26.68 7.99967 26.2133 7.99967 25.3333C7.99967 24.6 7.39967 24 6.66634 24C5.93301 24 5.33301 24.6 5.33301 25.3333C5.33301 27.5867 7.17301 29.3467 9.51967 29.3467H22.453C24.813 29.3467 26.6663 27.5867 26.6663 25.3333C26.6663 24.6 26.0663 24 25.333 24Z" fill="#676A71"/>
                            </svg>
                        </div>
                        <div className={styles.iconProfile}>
                            <Button view={ButtonTypes.OutlinedProfile} warning={true} name={'Выход'}/>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svg} d="M18.6667 20C17.9333 20 17.3333 20.6 17.3333 21.3333V22.6667C17.3333 24.1067 16.4133 25.3333 15.3333 25.3333H8.66667C7.58667 25.3333 6.66667 24.1067 6.66667 22.6667V9.33333C6.66667 7.89333 7.58667 6.66667 8.66667 6.66667H15.3333C16.4133 6.66667 17.3333 7.89333 17.3333 9.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12C19.4 12 20 11.4 20 10.6667V9.33333C20 6.38667 17.9067 4 15.3333 4H8.66667C6.09333 4 4 6.38667 4 9.33333V22.6667C4 25.6133 6.09333 28 8.66667 28H15.3333C17.9067 28 20 25.6133 20 22.6667V21.3333C20 20.6 19.4 20 18.6667 20Z" fill="#E0371F"/>
                                <path className={styles.svg} d="M27.9997 16C27.9997 15.8134 27.9597 15.6267 27.8797 15.4667C27.7997 15.2533 27.693 15.0667 27.533 14.9067L23.5197 10.9067C22.9997 10.3867 22.1597 10.3867 21.6397 10.9067C21.1197 11.4267 21.1197 12.2666 21.6397 12.7866L23.5197 14.6533H10.6663C9.93301 14.6533 9.33301 15.2533 9.33301 15.9867C9.33301 16.72 9.93301 17.32 10.6663 17.32H23.5197L21.653 19.1866C21.133 19.7066 21.133 20.5467 21.653 21.0667C21.9197 21.3333 22.253 21.4533 22.5997 21.4533C22.9464 21.4533 23.2797 21.32 23.5463 21.0667L27.5463 17.08C27.7063 16.92 27.8264 16.72 27.893 16.52C27.9597 16.36 28.013 16.1733 28.013 15.9867L27.9997 16Z" fill="#E0371F"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={styles.profileFormWrap}>
                    <div className={styles.user}>
                        <img src={User} alt='Photo User'/>
                        <Heading level={HeadingLevel.Three} color={Color.Black}>
                            Здравствуйте, Захар!
                        </Heading>
                    </div>
                    <div>
                        <Heading level={HeadingLevel.Four} className={styles.basicDataHeadingWrap}>
                            Основные данные
                        </Heading>
                        <form onSubmit={handleFormSubmit}>
                            <div className={styles.formWrap}>
                                <div className={styles.formColumnWrap}>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Имя'}
                                            type={'text'}
                                            name={'name'}
                                            placeholder={'Введите имя'}
                                            value={forms.name}
                                            onChange={handleChangeValue}
                                        />
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Отчество'}
                                            type={'text'}
                                            name={'patronymic'}
                                            placeholder={'Введите Отчество'}
                                            value={forms.patronymic}
                                            onChange={handleChangeValue}
                                        />
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Город'}
                                            type={'text'}
                                            name={'city'}
                                            placeholder={'Введите имя'}
                                            value={forms.city}
                                            onChange={handleChangeValue}
                                        />
                                        <button className={styles.iconInput} type="submit" value=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Фамилия'}
                                            type={'text'}
                                            name={'secondName'}
                                            placeholder={'Введите фамилию'}
                                            value={forms.secondName}
                                            onChange={handleChangeValue}
                                        />
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Страна'}
                                            type={'text'}
                                            name={'country'}
                                            placeholder={'Введите Страну'}
                                            value={forms.country}
                                            onChange={handleChangeValue}
                                        />
                                        <button className={styles.iconInput} type="submit" value=""/>
                                    </div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Телефон'}
                                            type={'tel'}
                                            name={'phone'}
                                            placeholder={'Введите телефон'}
                                            value={forms.phone}
                                            onChange={handleChangeValue}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Heading level={HeadingLevel.Four} className={styles.basicDataHeadingWrap}>
                                Пароль
                            </Heading>
                            <div className={styles.passwordWrap}>
                                <div className={styles.formColumnWrap}>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Новый пароль'}
                                            type={hiddenPassword ? 'password': 'text'}
                                            name={'password'}
                                            placeholder={'Введите пароль'}
                                            value={forms.password}
                                            onChange={handleChangeValue}
                                        />
                                        <button
                                            className={cn(styles.iconInput, styles.password)}
                                            type="submit"
                                            value=""
                                            onClick={handleClickPasswordIcon}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.inputWrap}>
                                        <CustomInput
                                            styleLabel={styles.labelInput}
                                            inputCustom={true}
                                            view={CustomInputTypes.Profile}
                                            title={'Повторите пароль'}
                                            type={hiddenRepeatPassword ? 'password': 'text'}
                                            name={'repeatPassword'}
                                            placeholder={'Введите пароль'}
                                            value={forms.repeatPassword}
                                            onChange={handleChangeValue}
                                        />
                                        <button
                                            className={cn(styles.iconInput, styles.password)}
                                            type="submit"
                                            value=""
                                            onClick={handleClickRepeatPasswordIcon}
                                        />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className={styles.buttonWrap}>
                        <Button
                            name={'Сохранить'}
                            view={ButtonTypes.Profile}
                            onClick={handleSubmit}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;