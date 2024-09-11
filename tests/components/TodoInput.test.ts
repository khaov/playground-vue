import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoInput from '@/components/todolist/TodoInput.vue'

describe('TodoInput', () => {
  it('renders correct TodoInput', () => {
    const wrapper = mount(TodoInput, {
      props: {
        id: '1',
        label: 'Lorem ipsum',
        modelValue: false
      }
    })

    const input = wrapper.find('[data-test="todo-input"]')
    const label = wrapper.find('[data-test="todo-label"]')

    expect(input.attributes().id).toBe('1')
    expect(label.text()).toBe('Lorem ipsum')
  })
})
