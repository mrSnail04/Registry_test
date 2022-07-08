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
                            <Heading className={styles.textWrap} level={HeadingLevel.Five}color={Color.Black}>
                                Разработчик
                            </Heading>
                            <p className={styles.textLogo}>ОАО «Агентство сервисизации и реинжиниринга»</p>
                            <p className={cn(styles.textLogo, styles.textLogo_light)}>Минск, улица Клары Цеткин, 24</p>
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
                            Техническая пддержка
                        </Heading>
                        <p className={cn(styles.text, styles.text_light)}>
                            Ежедневно с 8.00 до 19.00,
                            за исключением выходных (суббота, воскресенье) и праздничных дней.
                        </p>
                        <hr className={styles.horizontalLine_Short}/>
                        <p className={styles.text}>+375 25 111 22 33 </p>
                        <p className={styles.text}>+375 29 222 44 55</p>
                        <p className={styles.text}>ReestrPOsupport@mail.ru</p>
                    </div>
                    <div className={styles.contactBlockWrap}>
                        <Heading
                            level={HeadingLevel.Four}
                            color={Color.Gray}
                            className={styles.headingWrap}
                        >
                            Контакты
                        </Heading>
                        <p className={styles.text}>+375 33 112 22 45 </p>
                        <p className={styles.text}>+375 29 222 44 88</p>
                        <p className={styles.text}>ReesrtPO@mail.ru</p>
                        <p className={styles.text}>220004 г. Минск, ул. Карла Маркса, 38</p>
                        <p className={styles.footerLink}>Связаться с поддержкой</p>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
            </p>
        </footer>
    )
};

export default Footer;