import React from 'react';
import './pagination.styles.scss';

export default class Pagination extends React.Component {
    render() {
        const { activePage, totalPages } = this.props;
            return(
                <div className='pagination'>
                    <a onClick={(e) => this.props.onPageChange(e, Math.max(activePage - 1, 1))} >&laquo;</a>
                    {[...Array(totalPages).keys()].map((_,i) => <a key={`pag-${i}`} onClick={(e) => this.props.onPageChange(e, i+1)} className={i+1 === activePage ? "active" : ""}>{i+1}</a>)}
                    <a onClick={(e) => this.props.onPageChange(e, Math.min(activePage + 1, totalPages))}>&raquo;</a>
                </div>
            );
    }
}