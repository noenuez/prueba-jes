import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useGet } from './hooks/useGet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../../Pagination';

function Grid(props) {
  const formatNewUrl = () => {
    const newUrl = `${props.url}?page=1&pageSize=${
      props.pageSize ? props.pageSize : 5
    }`;
    return newUrl;
  };
  const [url, setUrl] = useState(formatNewUrl());
  const { colDefs, name } = props;
  const { data, loading, error } = useGet(url);

  useEffect(() => {
    const newUrl = formatNewUrl();
    setUrl(newUrl);
  }, [props.url]);

  const rows = data.content;

  const mapAction = (actions, row) => {
    return actions.map((item, index) => {
      return (
        <button
          key={`${name}-action-${index}`}
          className={`btn btn-sm m-1  ${item.style}`}
          onClick={() => item.action(row)}
        >
          {item.label}
        </button>
      );
    });
  };

  const mapRow = () => {
    return rows.map((item, idx) => {
      return (
        <tr key={`${name}-row${idx}`}>
          {colDefs.map(col => {
            if (col.type === 'actions') {
              return (
                <td key={`${name}-${idx}${col.field}`}>
                  {' '}
                  {mapAction(col.actions, item)}
                </td>
              );
            }
            return (
              <td key={`${name}-${idx}${col.field}`}>{item[col.field]}</td>
            );
          })}
        </tr>
      );
    });
  };

  const setPage = page => {
    const url = `${props.url}?page=${page}&pageSize=${
      props.pageSize ? props.pageSize : 5
    }`;
    setUrl(url);
  };

  if (loading) {
    return <div>Cargando..</div>;
  }

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {colDefs.map((col, idx) => {
              return <th key={`${name}-header${idx}`}>{col.headerName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {error && (
            <tr>
              <td style={{ textAlign: 'center' }} colSpan={`${colDefs.length}`}>
                Ocurrio un problema
              </td>
            </tr>
          )}
          {data && data.total === 0 && (
            <tr>
              <td style={{ textAlign: 'center' }} colSpan={`${colDefs.length}`}>
                No se han encontrado resultados
              </td>
            </tr>
          )}

          {mapRow()}
        </tbody>
      </Table>
      <div className="float-right">
        <Pagination {...data} onPage={page => setPage(page)} />
      </div>
    </div>
  );
}

export default Grid;
