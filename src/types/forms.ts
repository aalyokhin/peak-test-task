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
      fieldType: FieldType.Checkbox;
      fieldValue: boolean | null;
      isFieldRequired: boolean;
    }
  | {
      id: string;
      fieldId: string;
      fieldName: string;
      fieldType: FieldType.Text;
      fieldValue: string | null;
      isFieldRequired: boolean;
    }
  | {
      id: string;
      fieldId: string;
      fieldName: string;
      fieldType: FieldType.Number;
      fieldValue: number | null;
      isFieldRequired: boolean;
    };
