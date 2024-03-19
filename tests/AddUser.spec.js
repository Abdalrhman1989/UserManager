// Eksempel på AddUser.spec.js
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AddUser from '@/components/AddUser.vue';

describe('AddUser.vue', () => {
  it('should display the correct initial UI', () => {
    const wrapper = mount(AddUser);
    // Eksempel på en simpel assertion
    expect(wrapper.text()).toContain('Add User');
  });
});
