import React, { useState, useEffect } from 'react';
import { Pagination as Paginable } from 'react-bootstrap';

function Pagination(props) {
  const [page, setPage] = useState(props.page);
  const [lastPage, setLastPage] = useState(props.lastPage);

  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  useEffect(() => {
    setLastPage(props.lastPage);
  }, [props.lastPage]);

  const items = () => {
    let items = [];

    for (let idx = 1; idx <= lastPage; idx++) {
      items.push(
        <Paginable.Item
          key={idx}
          active={idx === page}
          onClick={() => props.onPage(idx)}
        >
          {idx}
        </Paginable.Item>,
      );
    }

    return items;
  };

  if (props.total === 0) {
    return '';
  }

  return (
    <div>
      <Paginable>
        <Paginable.First onClick={() => props.onPage(props.firstPage)} />
        <Paginable.Prev onClick={() => props.onPage(props.previousPage)} />
        {items()}
        <Paginable.Next onClick={() => props.onPage(props.nextPage)} />
        <Paginable.Last onClick={() => props.onPage(props.lastPage)} />
      </Paginable>
    </div>
  );
}

export default Pagination;
