/**
 *
 * Fiscalia
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, fiscaliaActions } from './slice';
import { selectFiscalia } from './selectors';
import { fiscaliaSaga } from './saga';
import {
  GeoMarker,
  HookFormResolver,
  Text,
  TextArea,
} from 'app/components/form';
import { HookFormMethods } from 'app/components/form/hook-form/hookFormResolver';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FiscaliaModel } from './types';
import { getFiscalia } from './service';
import { useHistory, useParams } from 'react-router-dom';

interface Props {}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Fiscalia = memo(() => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: fiscaliaSaga });
  const state = useSelector(selectFiscalia);
  const history = useHistory();
  const [fiscaliaModel, setFiscaliaModel] = useState<FiscaliaModel>({});
  let { id } = useParams<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onSubmit = (model: FiscaliaModel) => {
    model.id = id;
    model.latitud = model.localizacion?.lat;
    model.longitud = model.localizacion?.lng;
    model.localizacion = undefined;
    dispatch(fiscaliaActions.submitForm({ form: model }));
  };
  const onDelete = () => {
    dispatch(fiscaliaActions.eliminar({ form: { id: id } }));
  };
  const validations = yup.object().shape({
    nombre: yup.string().required('Nombre es requerido'),
    descripcion: yup.string().required('Descripción es requerida'),
    direccion: yup.string().required('Dirección es requerido'),
    telefono: yup
      .string()
      .required()
      .max(8)
      .matches(phoneRegExp, 'Numero de telefono invalido'),
    localizacion: yup.object().nullable().required('Localización es requerido'),
  });

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await getFiscalia(id);
      result.data.localizacion = {
        lat: result.data.latitud,
        lng: result.data.longitud,
      };
      setFiscaliaModel(result.data);
    };
    dispatch(fiscaliaActions.redirect({}));
    if (id) {
      fetchData();
    }
  }, []);
  if (id && !fiscaliaModel.nombre) {
    return <></>;
  }
  if (state.redirect) {
    history.push(state.redirect);
  }
  return (
    <>
      <HookFormResolver
        nameForm={'formGeneralData'}
        onSubmit={onSubmit}
        validations={validations}
        initialValues={fiscaliaModel}
      >
        {({}: HookFormMethods) => {
          return (
            <>
              <Card>
                <Card.Body>
                  <Card.Title>Fiscalias </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Gestión de fiscalias
                  </Card.Subtitle>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Text name="nombre" label="Nombre" />
                      </Col>
                      <Col>
                        <Text name="telefono" label="Telefono" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextArea
                          rows={2}
                          name="descripcion"
                          label="Descripció"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextArea
                          rows={3}
                          label="Dirección completa"
                          name="direccion"
                        />
                      </Col>
                    </Row>
                    <hr></hr>
                    <GeoMarker
                      defaultValue={fiscaliaModel.localizacion}
                      label="Selecciona la ubicación"
                      name="localizacion"
                    />
                  </Card.Body>
                  <Button type="submit" variant="success">
                    {id ? 'Editar' : 'Crear'}
                  </Button>{' '}
                  <Button variant="secondary" href="/fiscalia-lista">
                    Cancelar
                  </Button>{' '}
                  {id && (
                    <Button variant="danger" onClick={()=>onDelete()}>
                      Eliminar
                    </Button>
                  )}
                </Card.Body>
              </Card>{' '}
            </>
          );
        }}
      </HookFormResolver>
    </>
  );
});
