import React from 'react';
import {CardNews} from "../CardNews/CardNews";
import img1 from "../../assert/images/card1.png";
import img2 from "../../assert/images/card2.png";
import img3 from "../../assert/images/card3.png";
import img4 from "../../assert/images/card4.png";
import img5 from "../../assert/images/card5.png";
import Heading from "../Heading";
import styles from "./News.module.scss";
import {HeadingLevel} from "../Heading/Heading";

export const News = () => {
    return(
        <>
            <Heading className={styles.newsHeading} level={HeadingLevel.Two}>
                Новости реестра
            </Heading>
            <div className={styles.cardWrap}>
                <CardNews
                    id={'0'}
                    img={img1}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
                <CardNews
                    id={'1'}
                    img={img2}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
                <CardNews
                    id={'2'}
                    img={img1}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
                <CardNews
                    id={'3'}
                    img={img3}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
                <CardNews
                    id={'4'}
                    img={img4}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
                <CardNews
                    id={'5'}
                    img={img5}
                    title={'Технические работы 30.05.2022'}
                    date={'30.05.2022'}
                    description={'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'}/>
            </div>
        </>
    )
};