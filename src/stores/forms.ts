import type { Base64Form } from '@/types/common';
import { defineStore } from 'pinia';

interface State {
  forms: Base64Form[];
}

export const useFormsStore = defineStore('forms', {
  state: (): State => ({
    forms: [],
  }),

  actions: {
    addForm(payload: Base64Form) {
      this.forms.push(payload);
    },

    deleteForm(payload: Pick<Base64Form, 'id'>) {
      const formIndex = this.forms.findIndex(form => form.id === payload.id);

      if (formIndex < 0) return;

      this.forms.splice(formIndex, 1);
    },
  },
});
