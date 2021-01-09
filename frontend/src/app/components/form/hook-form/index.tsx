import { yupResolver } from '@hookform/resolvers';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  onSubmit: Function;
  validations?: any;
  children?: any;
  initialValues?: any;
  nameForm?: string;
}

function HookForm(props: Props) {
  const methods = useForm({
    resolver: props.validations ? yupResolver(props.validations) : undefined,
    defaultValues: props.initialValues ? props.initialValues : {}
  });

  const submit = (data: any) => props?.onSubmit(data);
  return (
    <FormProvider {...methods}>
      <Form
        noValidate
        autoComplete="off"
        id={props.nameForm}
        onSubmit={methods.handleSubmit((d) => submit(d))}
      >
        {props.children}
      </Form>
    </FormProvider>
  );
}

export default HookForm;
