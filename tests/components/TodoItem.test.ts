import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoItem from '@/components/todolist/TodoItem.vue'

describe('TodoItem', () => {
  it('renders correct TodoItem', () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {
          id: '1',
          label: 'Lorem ipsum',
          completed: false
        }
      }
    })

    const input = wrapper.find('[data-test="todo-input"]')
    const label = wrapper.find('[data-test="todo-label"]')
    const remove = wrapper.find('[data-test="todo-remove"]')

    expect(input.attributes().id).toBe('1')
    expect(label.text()).toBe('Lorem ipsum')
    expect(remove.exists()).toBe(true)
  })
})
