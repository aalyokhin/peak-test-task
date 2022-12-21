export type SelectOption = {
  label: string;
  value: string;
};

export enum FieldType {
  Checkbox = 'checkbox',
  Divider = 'divider',
  Number = 'number',
  Text = 'text',
}

export type FormField =
  | {
      id: string;
      fieldId: string;
      fieldType: FieldType.Divider;
    }
  | {
      id: string;
      fieldId: string;
      fieldName: string;
      isFieldRequired: boolean;
      fieldType: FieldType.Checkbox;
      fieldDefaultValue: boolean;
    }
  | {
      id: string;
      fieldId: string;
      fieldName: string;
      isFieldRequired: boolean;
      fieldType: FieldType.Text;
      fieldDefaultValue: string;
    }
  | {
      id: string;
      fieldId: string;
      fieldName: string;
      isFieldRequired: boolean;
      fieldType: FieldType.Number;
      fieldDefaultValue: number;
    };
