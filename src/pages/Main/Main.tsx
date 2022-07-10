import React, {FormEvent, useState} from 'react';
import cover from '../../assert/images/3dOfficeWork.png';
import filter from '../../assert/icons/filter.svg';
import threeDotsVertical from '../../assert/icons/threeDotsVertical.svg';
import Heading, {HeadingLevel} from '../../components/Heading/Heading';
import {Table} from '../../components/Table/Table';
import cn from 'classnames';
import {CustomInput, CustomInputTypes} from '../../components/Input/Input';
import Button, {ButtonTypes} from '../../components/Button/Button';
import {News} from '../../components/News/News';

import styles from './Mian.module.scss';

const Main = () => {

    const [search, setSearch] = useState({
        textSearch:'',
    });
    const resetRequest = () => {
        setSearch({
            textSearch:''
        })
    };
    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    };
    const handleSubmit = () => {
        console.log('#####:form ',search)
        resetRequest()

    };

    return(
        <div className={styles.root}>
            <div className={styles.mainWrap}>
                <div className={styles.headingInformationWrap}>
                    <Heading className={styles.headingInformation} level={HeadingLevel.One}>
                        РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
                    </Heading>
                    <p className={cn(styles.text,styles.text_light)}>
                        Единый реестр программ для электронных
                        вычислительных машин и баз данных
                    </p>
                    <p className={cn(styles.text,styles.text_light)}>
                        Включено ПО в реестр: <span>13 438</span> <br/>
                        Правообладателей: <span>4 272</span>
                    </p>
                    <form className={styles.formSearchWrap}
                        onSubmit={handleFormSubmit}>
                        <div className={styles.inputWrap}>
                            <CustomInput
                                inputCustom={true}
                                view={CustomInputTypes.MenuSearch}
                                type={'text'}
                                name={'textSearch'}
                                placeholder={'Поиск реестра...'}
                                value={search.textSearch}
                                onChange={handleChangeValue}
                            />
                            <button className={styles.submitSearchIcon} onClick={handleSubmit} value=""/>
                            <Button
                                className={styles.findButtonWrap}
                                name={'Искать'}
                                view={ButtonTypes.Profile}
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
                <img src={cover} alt='cover'/>
            </div>
            <div className={styles.registryTableWrap}>
                <div className={styles.registryTable}>
                    <div className={styles.headingRegistry}>
                        <Heading level={HeadingLevel.Two}>
                            Реестры
                        </Heading>
                        <div>
                            <img className={styles.iconWrap} src={filter} alt={'filter icon'}/>
                            <img src={threeDotsVertical} alt={'three dots vertical'}/>
                        </div>
                    </div>
                    <div className={styles.tableWrap}>
                        <Table/>
                    </div>
                </div>
            </div>
            <div className={styles.newsWrap}>
                <News/>
            </div>
        </div>
    )
}

export default Main;