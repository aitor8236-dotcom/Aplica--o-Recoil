import { selector } from 'recoil'
import { taskFilterState, taskListState } from '../atoms/tasksAtom'

export const filteredTasksSelector = selector({
  key: 'filteredTasksSelector',
  get: ({ get }) => {
    const tasks = get(taskListState)
    const filter = get(taskFilterState)

    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed)
      case 'pending':
        return tasks.filter((task) => !task.completed)
      default:
        return tasks
    }
  },
})
