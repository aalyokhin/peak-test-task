import { render, fireEvent } from '@testing-library/vue';
import TextInput from '@/components/form-elements/TextInput.vue';

describe('TextInput.vue', () => {
  it('renders text input with default value', () => {
    const inputValue = 'test123';
    const { getByDisplayValue } = render(TextInput, {
      props: {
        type: 'text',
        fieldId: 'text-input',
        modelValue: inputValue,
      },
    });

    expect(getByDisplayValue(inputValue).getAttribute('type')).toBe('text');
  });

  it('renders number input with default value', () => {
    const inputValue = 123;
    const { getByDisplayValue } = render(TextInput, {
      props: {
        type: 'number',
        fieldId: 'number-input',
        modelValue: inputValue,
      },
    });

    expect(getByDisplayValue(inputValue).getAttribute('type')).toBe('number');
  });

  it('renders input label', () => {
    const { getByLabelText } = render(TextInput, {
      props: {
        type: 'text',
        fieldId: 'text-input',
        modelValue: 'default text',
        fieldName: 'text input label',
        hasLabel: true,
      },
    });

    getByLabelText(/text input label/i);
  });

  it('emits updated value', async () => {
    const inputValue = 'default text';
    const { getByLabelText, emitted, getByDisplayValue } = render(TextInput, {
      props: {
        type: 'text',
        fieldId: 'text-input',
        modelValue: inputValue,
        fieldName: 'text input label',
        hasLabel: true,
      },
    });

    getByDisplayValue(inputValue);

    const inputElement = getByLabelText(/text input label/i);

    await fireEvent.update(inputElement, 'foo');

    getByDisplayValue('foo');
    expect(emitted('update:modelValue')[0]).toEqual(['foo']);
  });
});
