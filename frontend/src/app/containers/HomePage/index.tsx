import * as React from 'react';
import { Card, Row, Col, Form, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Información </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Prueba tecnica
          </Card.Subtitle>
          <Row>
            <Col>
              <Form.Label>Noe Saul Nuñez</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant="secondary">
                <Alert.Heading>Enunciado</Alert.Heading>
                <p>
                  El Ministerio Público es una institución que cuenta con
                  diversas fiscalías en todo el país, para lo cual tiene la
                  necesidad de contar con la información de la ubicación física
                  de cada una de ellas así como el número de teléfono.
                  Información se deberá poder modificar en el transcurso del
                  tiempo ya que cambien de ubicación constantemente.
                </p>
                <hr />
              </Alert>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <Alert variant="secondary">
                <Alert.Heading>Componentes</Alert.Heading>
                <ul>
                  <li>Fronteend react/typescript</li>
                  <li>Backend levantado con nest</li>
                  <li>Creación, inserción y eliminación de fiscalias</li>
                </ul>
              </Alert>
            </Col>
          </Row>
        </Card.Body>
      </Card>{' '}
    </>
  );
}
