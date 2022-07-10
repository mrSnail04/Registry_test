import React, {useMemo, useState} from 'react';
import {Color} from "../Heading/Heading";
import Data from '../../assert/tableDate.json'
import {Row} from "../Row/Row";
import {Pagination} from "../Pagination/Pagination";


export const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * 3;
        const lastPageIndex = firstPageIndex + 3;
        return Data.data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <>
            <Row head={true} data={Data.head[0]} color={Color.Blue}/>
            {currentTableData.map(item => {
                return(<Row key={item.id} data={item} color={Color.Gray}/>)

            })}
            <Pagination onPageChange={page => setCurrentPage(page)}
                        totalCount={Data.data.length}
                        siblingCount={1}
                        currentPage={currentPage}
                        pageSize={3}/>
        </>
    )
}
