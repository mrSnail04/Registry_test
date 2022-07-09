import React from 'react';
import {Color} from "../Heading/Heading";
import Data from '../../assert/tableDate.json'
import {Row} from "../Row/Row";


export const Table = () => {
    return (
        <>
            <Row head={true} data={Data.head[0]} color={Color.Blue}/>
            <Row data={Data.data[0]} color={Color.Gray}/>
            <Row data={Data.data[1]} color={Color.Gray}/>
            <Row data={Data.data[3]} color={Color.Gray}/>
            <Row data={Data.data[4]} color={Color.Gray}/>
            <Row data={Data.data[5]} color={Color.Gray}/>
            <Row data={Data.data[6]} color={Color.Gray}/>
            <Row data={Data.data[7]} color={Color.Gray}/>
            <Row data={Data.data[8]} color={Color.Gray}/>
            <Row data={Data.data[9]} color={Color.Gray}/>
        </>
    )
}
