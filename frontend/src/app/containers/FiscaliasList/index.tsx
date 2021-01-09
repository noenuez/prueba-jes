/**
 *
 * FiscaliasList
 *
 */

import { Grid } from 'app/components/form';
import React, { memo, useEffect, useState } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { base } from '../Fiscalia/service';
interface Props {}

export const FiscaliasList = memo((props: Props) => {
  let history = useHistory();

  const colDefs = [
    {
      headerName: 'Acciones',
      type: 'actions',
      actions: [
        {
          label: 'Editar',
          style: 'btn-dark',
          action: row => {
            history.push('/fiscalia/' + row.id);
          },
        },
      ],
    },
    {
      headerName: 'Nombre',
      field: 'nombre',
    },
    {
      headerName: 'Teléfono',
      field: 'telefono',
    },
    {
      headerName: 'Dirección',
      field: 'direccion',
    },
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Fiscalias-lista </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Lista de fiscalias registradas
          </Card.Subtitle>
          <Row>
            <Col>
              <Button href="/fiscalia" type="submit" variant="success">
                Nueva Fiscalia
              </Button>{' '}
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <Grid pageSize={5} colDefs={colDefs} url={base} />
            </Col>
          </Row>
        </Card.Body>
      </Card>{' '}
    </>
  );
});
