import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowItem from './ShowItem.vue'
import { Skeletor } from 'vue-skeletor'
import { RouterLink } from 'vue-router'
describe('ShowItem.vue', () => {
  it('renders loading state correctly', async () => {
    const wrapper = mount(ShowItem, {
      components: {
        RouterLink
      },
      props: {
        loading: true
      }
    })

    // Check if the component correctly renders the loading state
    expect(wrapper.findComponent(Skeletor).exists()).toBe(true)
    expect(wrapper.findAllComponents(Skeletor).length).toBeGreaterThan(0)
  })
})
