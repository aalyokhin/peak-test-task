import { render } from '@testing-library/vue';
import EditFormPage from '@/pages/EditFormPage.vue';

describe('EditFormPage.vue', () => {
  it('has heading', () => {
    const { getByRole } = render(EditFormPage);

    getByRole('heading', { name: /edit form/i });
  });

  it('has form fields table', () => {
    const { getByTestId } = render(EditFormPage);

    getByTestId('form-fields-table');
  });
});
