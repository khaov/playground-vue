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

    const field = wrapper.find('[data-test="todo-field"]')
    const input = field.find('[data-test="todo-field-input"]')
    const label = field.find('[data-test="todo-field-label"]')

    expect(input.attributes().id).toBe('1')
    expect(label.text()).toBe('Lorem ipsum')
  })
})
