import { render } from '@testing-library/vue';
import RenderFormFromBase64 from '@/components/RenderFormFromBase64.vue';

describe('RenderFormPage.vue', () => {
  it('renders empty form by default', () => {
    const { getByTestId } = render(RenderFormFromBase64, {
      props: {
        base64string: '',
        isBase64stringValid: true,
      },
    });

    getByTestId('render-form');
  });

  it('shows error if provided string cannot be parsed to JSON', () => {
    const { getByText } = render(RenderFormFromBase64, {
      props: {
        base64string: '111',
        isBase64stringValid: true,
      },
    });

    getByText(/oops! provided base64 string cannot be parsed to json/i);
  });

  it('renders h2 tag for divider field type', () => {
    const { getByRole } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkVHlwZSI6ImRpdmlkZXIiLCJmaWVsZElkIjoidGhpcyBpcyBkaXZpZGVyIn1d',
        isBase64stringValid: true,
      },
    });

    getByRole('heading', { name: /this is divider/i, level: 2 });
  });

  it('renders number input for number field type with correct label and value', () => {
    const { getByLabelText } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkSWQiOiJudW1iZXItaW5wdXQiLCJmaWVsZE5hbWUiOiJ0aGlzIGlzIG51bWJlciBpbnB1dCIsImZpZWxkVHlwZSI6Im51bWJlciIsImZpZWxkVmFsdWUiOjExMSwiaXNGaWVsZFJlcXVpcmVkIjp0cnVlfV0=',
        isBase64stringValid: true,
      },
    });

    const inputElement = getByLabelText<HTMLInputElement>(/this is number input/i);

    expect(inputElement.value).toBe('111');
    expect(inputElement.name).toBe('number-input');
    expect(inputElement.id).toBe('number-input');
    expect(inputElement.required).toBe(true);
    expect(inputElement.type).toBe('number');
  });

  it('renders text input for input field type with correct label and value', () => {
    const { getByLabelText } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkSWQiOiJ0ZXh0LWlucHV0IiwiZmllbGROYW1lIjoidGhpcyBpcyB0ZXh0IGlucHV0IiwiZmllbGRUeXBlIjoidGV4dCIsImZpZWxkVmFsdWUiOiJzb21lIHRleHQiLCJpc0ZpZWxkUmVxdWlyZWQiOnRydWV9XQ==',
        isBase64stringValid: true,
      },
    });

    const inputElement = getByLabelText<HTMLInputElement>(/this is text input/i);

    expect(inputElement.value).toBe('some text');
    expect(inputElement.name).toBe('text-input');
    expect(inputElement.id).toBe('text-input');
    expect(inputElement.required).toBe(true);
    expect(inputElement.type).toBe('text');
  });

  it('renders checkbox input for checkbox field type with correct label and value', () => {
    const { getByLabelText } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkSWQiOiJjaGVja2JveC1pbnB1dCIsImZpZWxkTmFtZSI6InRoaXMgaXMgY2hlY2tib3giLCJmaWVsZFR5cGUiOiJjaGVja2JveCIsImZpZWxkVmFsdWUiOnRydWUsImlzRmllbGRSZXF1aXJlZCI6dHJ1ZX1d',
        isBase64stringValid: true,
      },
    });

    const inputElement = getByLabelText<HTMLInputElement>(/this is checkbox/i);

    expect(inputElement.checked).toBe(true);
    expect(inputElement.name).toBe('checkbox-input');
    expect(inputElement.id).toBe('checkbox-input');
    expect(inputElement.required).toBe(true);
    expect(inputElement.type).toBe('checkbox');
  });

  it('has submit button if there are editable form fields', () => {
    const { getByRole } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkSWQiOiJudW1iZXItaW5wdXQiLCJmaWVsZE5hbWUiOiJ0aGlzIGlzIG51bWJlciBpbnB1dCIsImZpZWxkVHlwZSI6Im51bWJlciIsImZpZWxkVmFsdWUiOjExMSwiaXNGaWVsZFJlcXVpcmVkIjp0cnVlfV0=',
        isBase64stringValid: true,
      },
    });

    getByRole('button', { name: /submit/i });
  });

  it('has no submit button if there are no editable form fields', () => {
    const { queryByRole } = render(RenderFormFromBase64, {
      props: {
        base64string:
          'W3siaWQiOiI3cmVvdWU3NXZkdiIsImZpZWxkVHlwZSI6ImRpdmlkZXIiLCJmaWVsZElkIjoidGhpcyBpcyBkaXZpZGVyIn1d',
        isBase64stringValid: true,
      },
    });

    expect(queryByRole('button', { name: /submit/i })).toBeNull();
  });
});
