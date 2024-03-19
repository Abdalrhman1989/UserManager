import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';

describe('UserList.vue', () => {
  it('displays users and can remove a user', async () => {
    const users = [{ name: 'User One' }, { name: 'User Two' }];
    const wrapper = mount(UserList, {
      props: { users }
    });

    expect(wrapper.text()).toContain('User One');
    expect(wrapper.text()).toContain('User Two');

    await wrapper.findAll('button')[0].trigger('click'); // Antager at den første knap er slet-knappen

    expect(wrapper.emitted()).toHaveProperty('remove-user');
    expect(wrapper.emitted()['remove-user'][0]).toEqual([0]);
  });
});
