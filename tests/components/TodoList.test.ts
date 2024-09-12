import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoList from '@/components/todolist/TodoList.vue'
import TodoInput from '@/components/todolist/TodoInput.vue'

describe('TodoList', () => {
  it('renders correct TodoList', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('[data-test="todo-item"]')

    expect(wrapper.exists()).toBe(true)
    expect(items.length).toBe(3)
  })

  it('adds new TodoItem', async () => {
    const wrapper = mount(TodoList)

    // const wrapperInput = mount(TodoInput, {
    //   props: {
    //     id: '1',
    //     label: 'Lorem ipsum',
    //     modelValue: false
    //   }
    // })

    const form = wrapper.find('[data-test="todo-form"]')
    const field = form.find('[data-test="todo-field"]')
    const input = field.find('[data-test="todo-field-input"]')

    await input.setValue('Новая задача')
    await form.trigger('submit')

    const items = wrapper.findAll('[data-test="todo-item"]')
    expect(items.length).toBe(4)
    expect(wrapper.text()).toContain('Новая задача')
  })
})
