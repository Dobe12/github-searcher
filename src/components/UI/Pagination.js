import React from 'react'
import _ from 'lodash'

export const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize)
    if (pagesCount <= 1) return null
    const pages = Array(pagesCount).fill('').map((_, i) => i + 1)


    return (
        <nav>
            <ul className="pagination" >
                {pages.map(page => (
                <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item' }>
                    <a
                        className="page-link"
                        style={{cursor:'pointer'}}
                        onClick={() => onPageChange(page)}>
                        {page}
                    </a>
                </li>))}
            </ul>
        </nav>)
}
