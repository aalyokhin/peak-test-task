import { render } from '@testing-library/vue';
import NavigationHeader from '@/components/NavigationHeader.vue';
import router from '@/router';

describe('NavigationHeader.vue', () => {
  it('has links to edit and render pages', () => {
    const { getByRole } = render(NavigationHeader, {
      global: { plugins: [router] },
    });

    getByRole('link', { name: /edit/i });
    getByRole('link', { name: /render/i });
  });
});
