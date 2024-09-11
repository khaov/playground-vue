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

    const field = wrapper.find('[data-test="todo-field"]')
    const remove = wrapper.find('[data-test="todo-remove"]')

    expect(field.exists()).toBe(true)
    expect(remove.exists()).toBe(true)
  })
})