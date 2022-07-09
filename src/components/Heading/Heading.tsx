import React from 'react';
import cn from 'classnames';

import styles from './Heading.module.scss';


export enum HeadingLevel {
    One = '1',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
}
export enum Color {
    Gray = 'gray',
    Black = 'black',
    Blue ='blue',
}

export type HeadingProps = {
    level: HeadingLevel,
    className?: string,
    children: JSX.Element|JSX.Element[]|string,
    id?: string,
    color?: Color,
}

const Heading = ({
        level = HeadingLevel.One,
        color,
        className,
        children,
        id,
}: HeadingProps) =>{
    const el = `h${level}`;

    return React.createElement(el,{
        className: cn(
            styles.root,
            className,
            styles[`color_${color}`],
            styles[`level${level}`],
            ),
        id:id,
    }, children);
};


export default Heading;