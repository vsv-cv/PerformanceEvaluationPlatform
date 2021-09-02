import React from 'react'
import { formatDate } from './../../../utils/formatDate';

export const Row = ({
    row,
    columns,
    rowClick,
}) => {
    return (
        <>
            <tr key={row.id} onClick={e => rowClick(row.id, e)
            }>
                {columns.map(column => {
                    const key = `${row.id} ${column.id}`
                    return <td key={key}>{column.date ? formatDate(row[column.id]): row[column.id]}</td>
                })}
            </tr>
        </>
    )
}


