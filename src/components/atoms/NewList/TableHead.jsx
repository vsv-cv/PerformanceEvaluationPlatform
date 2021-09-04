import React from 'react'
import styles from './list.module.scss';
import descendingSortIcon from './svg/descending-sort.svg';
import ascendingSortIcon from './svg/ascending-sort.svg';

export const TableHead = ({
    column,
    sortedRow,
    onClickSort,
}) => {
    const { id, name, sort } = column
    return (
        <>
            {sort ?
                <th
                    key={id}
                    className={styles.sort_column}
                    onClick={() => onClickSort(id)}
                >
                    <span>{name}</span>
                    <span className={styles.sort_icon}>
                        <img src={sortedRow[id] === 1 ? ascendingSortIcon : descendingSortIcon } alt="" />
                    </span>
                </th>
                :
                <th key={id}>
                    <span>{name}</span>
                </th>
            }
        </>
    )
}


