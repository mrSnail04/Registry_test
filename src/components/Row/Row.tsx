import React from 'react';
import Heading from "../Heading";
import cn from 'classnames';
import {Color, HeadingLevel} from "../Heading/Heading";
import styles from './Row.module.scss';

export type TableProps = {
    data: any,
    head?: boolean,
    color?: Color,
}

export const Row = ({
                  data,
                  head,
                  color
               }: TableProps) => {
    return (
        <>
            <div key={data.id} className={styles.row}>
                <div className={styles.firstColumn}>
                    <button className={cn(styles.ColumnIcon, {[styles.head]:head})} value=""/>
                    <Heading className={styles.cellNumber} level={HeadingLevel.Five} color={color}>
                        {data.number}
                    </Heading>
                </div>
                <div className={styles.firstColumn}>
                    <button className={cn(styles.ColumnIcon, {[styles.head]:head})} value=""/>
                    <Heading className={styles.cellName} level={HeadingLevel.Five} color={color}>
                        {data.name}
                    </Heading>
                </div>
                <div className={styles.cellCode}>
                    <Heading  level={HeadingLevel.Five} color={color}>
                        {data.code}
                    </Heading>
                </div>
                <div className={styles.cellClass}>
                    <Heading  level={HeadingLevel.Five} color={color}>
                        {data.class}
                    </Heading>
                </div>
                <div className={styles.cellDate}>
                    <Heading level={HeadingLevel.Five} color={color}>
                        {data.date}
                    </Heading>
                </div>
                <div className={styles.cellWebsite}>
                    {head? <Heading level={HeadingLevel.Five} color={Color.Blue}>{data.website}</Heading>
                        :<a href={data.website}>Ссылка</a> }
                </div>
            </div>
        </>
    )
}
