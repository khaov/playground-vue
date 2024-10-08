import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TodoList from '@/components/todolist/TodoList.vue'
import TodoItem from '@/components/todolist/TodoFilter.vue'

describe('TodoList', () => {
  it('renders correct TodoList', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('[data-test="todo-item"]')

    expect(wrapper.exists()).toBe(true)
    expect(items.length).toBe(3)
  })

  it('adds new TodoItem', async () => {
    const wrapper = mount(TodoList)

    const form = wrapper.find('[data-test="todo-form"]')
    const field = form.find('[data-test="todo-field"]')
    const input = field.find('[data-test="todo-field-input"]')

    await input.setValue('Новая задача')
    await form.trigger('submit')

    //TODO: Посчитать исходное количество TodoItem, проверить, что их количество увеличелось на 1
    //TODO: Проверить наличие TodoItem с названием «Новая задача»

    const items = wrapper.findAll('[data-test="todo-item"]')
    expect(items.length).toBe(4)
    expect(wrapper.text()).toContain('Новая задача')
  })

  it('removes TodoItem', async () => {
    const todoList = mount(TodoList)

    const currentItems = todoList.findAll('[data-test="todo-item"]')
    expect(currentItems.length).toBe(3)

    const item = currentItems[0]
    const button = item.find('[data-test="todo-item-remove"]')
    await button.trigger('click')

    const updatedItems = todoList.findAll('[data-test="todo-item"]')

    expect(updatedItems.length).toBe(2)
  })

  it('filters todos correctly', async () => {
    const todoList = mount(TodoList)

    const allTodos = todoList.findAll('[data-test="todo-item"]').length
    const completedTodos = todoList.findAll('[type="checkbox"]:checked').length
    const unfinishedTodos = allTodos - completedTodos

    const todoFilter = todoList.find('[data-test="todo-filter"]')

    const filterAll = todoFilter.find('[value="all"]')
    const filterCompleted = todoFilter.find('[value="completed"]')
    const filterUnfinished = todoFilter.find('[value="unfinished"]')

    await filterCompleted.trigger('change')
    let updatedTodos = todoList.findAll('[data-test="todo-item"]').length
    expect(updatedTodos).toBe(completedTodos)

    await filterUnfinished.trigger('change')
    updatedTodos = todoList.findAll('[data-test="todo-item"]').length
    expect(updatedTodos).toBe(unfinishedTodos)

    await filterAll.trigger('change')
    updatedTodos = todoList.findAll('[data-test="todo-item"]').length
    expect(updatedTodos).toBe(allTodos)

    console.log(updatedTodos)
  })
})
