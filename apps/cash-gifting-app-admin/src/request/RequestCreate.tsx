import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
