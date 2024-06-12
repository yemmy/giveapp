import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InviteTitle } from "../invite/InviteTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceArrayInput
          source="invites"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="organizer" source="organizer" />
      </SimpleForm>
    </Edit>
  );
};
