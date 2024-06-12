import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
