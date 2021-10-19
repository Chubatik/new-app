import React from 'react';
import MyButton from "../button/MyButton";
import {usePagination} from "../../../hooks/usePagination";

const MyPagination = ({changePage, totalPages}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div style={{margin: 25, textAlign: 'center'}}>
            {pagesArray.map(p =>
                <MyButton key={p}
                          onClick={() => changePage(p)}>{p}</MyButton>)}
        </div>
    );
};

export default MyPagination;
