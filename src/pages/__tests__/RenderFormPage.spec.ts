import { render, fireEvent } from '@testing-library/vue';
import RenderFormPage from '@/pages/RenderFormPage.vue';

describe('RenderFormPage.vue', () => {
  it('has heading', () => {
    const { getByRole } = render(RenderFormPage);

    getByRole('heading', { name: /render form/i });
  });

  it('has textarea for base64string', () => {
    const { getByRole } = render(RenderFormPage);

    getByRole('textbox');
  });

  it('shows error if provided string is not valid base64', async () => {
    const { getByRole, getByText } = render(RenderFormPage);

    const inputElement = getByRole('textbox');

    await fireEvent.update(inputElement, '+-');

    getByText(/base64 string is not valid/i);
  });

  it('has rendered form', () => {
    const { getByTestId } = render(RenderFormPage);

    getByTestId('render-form');
  });
});
