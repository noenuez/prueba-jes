import React from 'react';
import { Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { DeepPartial } from 'react-hook-form/dist/types/utils';
import {
  FormState,
  OmitResetState,
  UnpackNestedValue,
} from 'react-hook-form/dist/types/form';
import { UseFormMethods } from 'react-hook-form/dist/types';
import { yupResolver } from '@hookform/resolvers';
interface Props {
  onSubmit: Function;
  validations?: any;
  children?: any;
  initialValues?: any;
  nameForm?: string;
}

export type HookFormMethods = UseFormMethods<any>;

function HookFormResolver(props: Props) {
  const methods = useForm({
    resolver: props.validations ? yupResolver(props.validations) : undefined,
    defaultValues: props.initialValues ? props.initialValues : {},
  });

  const submit = (data: any) => props?.onSubmit(data, methods.reset);

  const childrenProps: HookFormMethods = {
    ...methods,
  };
  return (
    <FormProvider {...methods}>
      <Form
        noValidate
        autoComplete="off"
        id={props.nameForm}
        onSubmit={methods.handleSubmit(d => submit(d))}
      >
        {props.children(childrenProps)}
      </Form>
    </FormProvider>
  );
}

export default HookFormResolver;
