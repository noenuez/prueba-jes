import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  defaultValue?: string;
  [key: string]: any;
  rows?: number;
  readOnly?: boolean;
}

function TextArea(props: Props) {
  const { register, errors } = useFormContext();
  const { label, name, defaultValue, readOnly } = props;
  const error = errors[name];
  // const defaultValue = props[name] ? props[name] : undefined;
  const rows = props.rows ? props.rows : 3;
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        defaultValue={defaultValue}
        as="textarea"
        rows={rows}
        name={name}
        ref={register}
        isInvalid={error}
        readOnly={readOnly}
      />
      <Form.Control.Feedback type="invalid">{error ? error.message : ''}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextArea;
