import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInput from './SearchInput.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('SearchInput', () => {
  // Mock router
  const routes = [{ path: '/search/', component: { template: 'Search Page' } }]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  it('initializes with an empty search key', () => {
    const wrapper = mount(SearchInput)
    expect(wrapper.find('input[type="search"]').element.value).toBe('')
  })

  it('updates the search key on input', async () => {
    const wrapper = mount(SearchInput)
    const input = wrapper.find('input[type="search"]')
    await input.setValue('Matrix')
    expect(input.element.value).toBe('Matrix')
  })

  it('navigates to the correct path on submit', async () => {
    vi.spyOn(router, 'push')
    const wrapper = mount(SearchInput, {
      global: {
        plugins: [router]
      }
    })
    await wrapper.find('input[type="search"]').setValue('Matrix')
    await wrapper.find('form').trigger('submit.prevent')
    expect(router.push).toHaveBeenCalledWith('/search/?q=Matrix')
  })
})
