import { render, fireEvent } from '@testing-library/vue';
import FormFieldsTable from '@/components/form-fields-table/FormFieldsTable.vue';
import { FieldType } from '@/types/forms';
import { decode, encode } from 'js-base64';

describe('FormFieldsTable.vue', () => {
  it('has divider form field added by default', () => {
    const { getByRole } = render(FormFieldsTable);

    getByRole('cell', { name: /divider/i });

    const typeSelectElement = getByRole<HTMLSelectElement>('combobox');

    expect(typeSelectElement.value).toBe(FieldType.Divider);
  });

  it('has delete button which removes a field', async () => {
    const { queryByRole, getByRole } = render(FormFieldsTable);

    const deleteButton = getByRole('button', { name: /delete/i });

    await fireEvent.click(deleteButton);

    expect(queryByRole('cell', { name: /divider/i })).toBeNull();
  });

  it('has add new field button which appends new row to the table', async () => {
    const { getByRole, findAllByRole } = render(FormFieldsTable);

    const addFieldButton = getByRole('button', { name: /add new field/i });

    await fireEvent.click(addFieldButton);
    await fireEvent.click(addFieldButton);
    await fireEvent.click(addFieldButton);

    const cells = await findAllByRole('cell', { name: /divider/i });

    expect(cells).toHaveLength(4);
  });

  it('has table head with all columns', () => {
    const { getByRole } = render(FormFieldsTable);

    getByRole('columnheader', { name: /type/i });
    getByRole('columnheader', { name: /id/i });
    getByRole('columnheader', { name: /name/i });
    getByRole('columnheader', { name: /default/i });
    getByRole('columnheader', { name: /required/i });
    getByRole('columnheader', { name: /actions/i });
  });

  it('has textarea element with correct base64 string of form JSON', () => {
    const { getByRole } = render(FormFieldsTable);

    const firstRowElement = getByRole<HTMLTableRowElement>('row');
    const rowId = firstRowElement.dataset.testid;

    const formFieldsConfig = [{ id: rowId, fieldType: 'divider', fieldId: '' }];

    const textareaElement = getByRole<HTMLTextAreaElement>('textbox', {
      name: /form base64 string/i,
    });

    // divider field added by default, so there is already a string
    expect(textareaElement.value).toBe(encode(JSON.stringify(formFieldsConfig)));

    // decodes back correctly, so matches config JSON
    expect(JSON.parse(decode(textareaElement.value))).toEqual(formFieldsConfig);
  });

  it('divider field type: renders id field and actions', () => {
    const { getByRole, queryByRole } = render(FormFieldsTable);

    getByRole('textbox', { name: /fieldid/i });
    getByRole('button', { name: /move/i });
    getByRole('button', { name: /delete/i });

    expect(queryByRole('textbox', { name: /fieldname/i })).toBeNull();
    expect(queryByRole('textbox', { name: /fielddefaultvalue/i })).toBeNull();
    expect(queryByRole('checkbox', { name: /isfieldrequired/i })).toBeNull();
  });

  it('number field type: renders id, name, default, required fields and actions', async () => {
    const { getByRole } = render(FormFieldsTable);

    const typeSelect = getByRole('combobox');

    await fireEvent.update(typeSelect, FieldType.Number);

    getByRole('textbox', { name: /fieldid/i });
    getByRole('textbox', { name: /fieldname/i });
    getByRole('spinbutton', { name: /fielddefaultvalue/i });
    getByRole('checkbox', { name: /isfieldrequired/i });
    getByRole('button', { name: /move/i });
    getByRole('button', { name: /delete/i });
  });

  it('text input field type: renders id, name, default, required fields and actions', async () => {
    const { getByRole } = render(FormFieldsTable);

    const typeSelect = getByRole('combobox');

    await fireEvent.update(typeSelect, FieldType.Text);

    getByRole('textbox', { name: /fieldid/i });
    getByRole('textbox', { name: /fieldname/i });
    getByRole('textbox', { name: /fielddefaultvalue/i });
    getByRole('checkbox', { name: /isfieldrequired/i });
    getByRole('button', { name: /move/i });
    getByRole('button', { name: /delete/i });
  });

  it('checkbox input field type: renders id, name, default as checkbox, required fields and actions', async () => {
    const { getByRole } = render(FormFieldsTable);

    const typeSelect = getByRole('combobox');

    await fireEvent.update(typeSelect, FieldType.Checkbox);

    getByRole('textbox', { name: /fieldid/i });
    getByRole('textbox', { name: /fieldname/i });
    getByRole('checkbox', { name: /fielddefaultvalue/i });
    getByRole('checkbox', { name: /isfieldrequired/i });
    getByRole('button', { name: /move/i });
    getByRole('button', { name: /delete/i });
  });
});
