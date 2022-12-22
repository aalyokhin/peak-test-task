import { render, fireEvent } from '@testing-library/vue';
import CheckboxInput from '@/components/form-elements/CheckboxInput.vue';

describe('CheckboxInput.vue', () => {
  it('renders checkbox input with default value as checked', () => {
    const { getByLabelText } = render(CheckboxInput, {
      props: {
        fieldId: 'checkbox-input',
        modelValue: true,
        fieldName: 'checkbox input',
        hasLabel: true,
      },
    });

    const inputElement = getByLabelText<HTMLInputElement>(/checkbox input/i);

    expect(inputElement.getAttribute('type')).toBe('checkbox');
    expect(inputElement.checked).toBeTruthy();
  });

  it('emits updated value', async () => {
    const { getByLabelText, emitted } = render(CheckboxInput, {
      props: {
        fieldId: 'checkbox-input',
        modelValue: null,
        fieldName: 'checkbox input',
        hasLabel: true,
      },
    });

    const inputElement = getByLabelText<HTMLInputElement>(/checkbox input/i);

    expect(inputElement.checked).toBeFalsy();

    await fireEvent.click(inputElement);

    expect(inputElement.checked).toBeTruthy();

    expect(emitted('update:modelValue')[0]).toEqual([true]);
  });
});
