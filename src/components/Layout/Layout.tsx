import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../Header';
import Footer from '../Footer';


import styles from './Layout.module.scss';

export const Layout = () => {
    return(
        <div className={styles.root}>
            <div className={styles.layout}>
                <Header/>
                <div className={styles.container}>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>



    )
};