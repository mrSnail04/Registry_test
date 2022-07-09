import React from 'react';
import styles from './Tabel.module.scss';
import Heading from "../Heading";
import {Color, HeadingLevel} from "../Heading/Heading";

export type TableProps = {
    titleNumber: string,
    titleName: string,
    titleCode: string,
    titleClass: string,
    titleDate: string,
    titleWebsite: string,
}

export const Table = ({
                  titleNumber,
                  titleName,
                  titleCode,
                  titleClass,
                  titleDate,
                  titleWebsite,
               }: TableProps) => {

    return (
        <div className={styles.row}>
            <Heading className={styles.cellNumber} level={HeadingLevel.Five} color={Color.Gray}>
                {titleNumber}
            </Heading>
            <Heading className={styles.cellName} level={HeadingLevel.Five} color={Color.Gray}>
                {titleName}
            </Heading>
            <Heading className={styles.cellCode} level={HeadingLevel.Five} color={Color.Gray}>
                {titleCode}
            </Heading>
            <Heading className={styles.cellClass} level={HeadingLevel.Five} color={Color.Gray}>
                {titleClass}
            </Heading>
            <Heading className={styles.cellDate} level={HeadingLevel.Five} color={Color.Gray}>
                {titleDate}
            </Heading>
            <a className={styles.cellWebsite} href={titleWebsite}>Ссылка</a>
        </div>
    )
};
