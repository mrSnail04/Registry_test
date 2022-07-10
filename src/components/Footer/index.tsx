import React from 'react';
import styles from './Footer.module.scss';
import cn from 'classnames';
import FooterLogo from '../../assert/icons/FooterLogo.svg'
import Heading, {Color, HeadingLevel} from '../Heading/Heading';

const Footer = () => {
    return (
        <footer className={styles.footerWrap}>
            <div className={styles.wrap}>
                <div className={styles.endLine}>
                    <div>
                        <div className={styles.logoBlockWrap}>
                            <img className={styles.footerLogo} src={FooterLogo} alt='Logo'/>
                            <p className={styles.textLogo}>
                                Открытое акционерное общество
                                «Реестр ПО» начало практическую
                                деятельность с 1 марта 2014 г
                            </p>
                        </div>
                        <div className={styles.developerBlockWrap}>
                            <Heading className={styles.textWrap} level={HeadingLevel.Five} color={Color.Black}>
                                Разработчик
                            </Heading>
                            <p className={styles.textLogo}>Булавский Максим Андреевич</p>
                            <p className={cn(styles.textLogo, styles.textLogo_light)}>Человек Мира</p>
                        </div>
                    </div>
                    <div className={styles.informationBlockWrap}>
                        <Heading
                            level={HeadingLevel.Four}
                            color={Color.Gray}
                            className={styles.headingWrap}
                        >
                            Информация
                        </Heading>
                        <p className={styles.text}>Реестры</p>
                        <p className={styles.text}>Новости</p>
                        <p className={styles.text}>Документы</p>
                        <p className={styles.text}>Вопросы</p>
                    </div>
                    <div className={styles.supportBlockWrap}>
                        <Heading
                            level={HeadingLevel.Four}
                            color={Color.Gray}
                            className={styles.headingWrap}
                        >
                            Техническая поддержка
                        </Heading>
                        <p className={cn(styles.text, styles.text_light)}>
                            Ежедневно с 8.00 до 19.00,
                            за исключением выходных (суббота, воскресенье) и праздничных дней.
                        </p>
                        <hr className={styles.horizontalLine_Short}/>
                        <p className={styles.text}>+375 ** *** ** ** </p>
                        <p className={styles.text}>+375 ** *** ** **</p>
                        <p className={styles.text}>maks.bulavsky@gmail.com</p>
                    </div>
                    <div className={styles.contactBlockWrap}>
                        <Heading
                            level={HeadingLevel.Four}
                            color={Color.Gray}
                            className={styles.headingWrap}
                        >
                            Контакты
                        </Heading>
                        <p className={styles.text}>+375 ** *** ** ** </p>
                        <p className={styles.text}>+375 ** *** ** **</p>
                        <p className={styles.text}>maks.bulavsky@gmail.com</p>
                        <p className={styles.text}>Где-то в районе планеты Земля</p>
                        <a href="tel:+375 (29) 816-07-91" className={styles.footerLink}>Связаться с поддержкой</a>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                © Copyright 2022 — Булавский Максим Андреевич. Все права защищены.
            </p>
        </footer>
    )
};

export default Footer;