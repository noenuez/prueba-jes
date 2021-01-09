import React from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';
import { useFormContext } from 'react-hook-form';
interface Props {
  label: string;
  name: string;
  description?: string;
  disabled?: boolean;
  defaultValue?: string;
  readonly?: boolean;
  onBlur?: any;
  hidden?: boolean;
}

function Text(props: Props) {
  const methods = useFormContext();
  const {
    label,
    name,
    description,
    defaultValue,
    disabled,
    readonly,
    hidden,
  } = props;
  const { register, errors, setValue, getValues } = methods;

  const error = errors[name];

  const onBlur = () => {
    if (props.onBlur) {
      const value = getValues(name);
      props.onBlur(value);
    }
  };
  return (
    <Form.Group>
      <Form.Label>
        {label}{' '}
        {description ? (
          <OverlayTrigger
            overlay={<Tooltip id={`tooltip-${name}`}>{description}</Tooltip>}
          >
            <span className="d-inline-block">
              <InfoCircle className="small"></InfoCircle>
            </span>
          </OverlayTrigger>
        ) : (
          <></>
        )}
      </Form.Label>
      <Form.Control
        hidden={hidden ? true : false}
        defaultValue={defaultValue}
        type="text"
        name={name}
        ref={register}
        disabled={disabled}
        isInvalid={error}
        readOnly={readonly}
        onBlur={onBlur}
      />
      <Form.Control.Feedback type="invalid">
        {error ? error.message : ''}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default Text;
