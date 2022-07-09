import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTypes {
    Primary = 'primary',
    OutlinedPrimery = 'outlinedprimery',
    Error = 'error',
    Profile = 'profile',
    OutlinedProfile = 'outlinedprofile',
}

export type ButtonProps = {
    name: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    view?: ButtonTypes,
    icon?: string,
    className?: string,
    warning?: boolean,
}

export const Button = ({ name, warning, className, onClick,view = ButtonTypes.Primary }: ButtonProps) => (
    <button onClick={onClick} className={
        cn(
            className,
            styles.button,
            styles[`button_${view}`],
            {[styles.warning]:warning},
        )}>
        <span>
            {name}
        </span>
    </button>
);

export default Button;
