import React from 'react';
import Heading from '../Heading';
import {HeadingLevel} from '../Heading/Heading';
import notesCalendar from '../../assert/icons/notesCalendar.svg'
import styles from './CardNews.module.scss';
import cn from "classnames";

export type CardProps = {
    img: string,
    title: string,
    date: string,
    description:string,
    id: string,

}
export const CardNews = ({id, img, title, date, description}:CardProps) => {
    return(
        <div className={styles.cardWrap}>
            <button id={id} className={styles.imgWrap}>
                <img src={img} alt={'card 1'}/>
            </button>
            <div className={styles.descriptionWrap}>
                <Heading level={HeadingLevel.Four}>
                    {title}
                </Heading>
                <div className={styles.dataWrap}>
                    <img src={notesCalendar} alt={'notes calendar'}/>
                    <p className={cn(styles.text, styles.text_light)}>{date}</p>
                </div>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}