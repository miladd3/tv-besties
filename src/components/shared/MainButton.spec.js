import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MainButton from './MainButton.vue'

describe('MainButton', () => {
  it('renders a button tag by default', () => {
    const wrapper = mount(MainButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders a RouterLink when the "to" prop is provided', () => {
    const wrapper = mount(MainButton, {
      props: {
        to: '/path'
      }
    })
    expect(wrapper.element.tagName).toBe('ROUTERLINK')
  })

  it('passes all received attributes to the rendered element', async () => {
    const wrapper = mount(MainButton, {
      attrs: {
        id: 'testButton',
        'data-test': 'testData'
      }
    })
    expect(wrapper.attributes('id')).toBe('testButton')
    expect(wrapper.attributes('data-test')).toBe('testData')
  })
})
