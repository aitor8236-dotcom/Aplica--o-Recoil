import { atom } from 'recoil'

const localStorageEffect =
  (storageKey, isValidValue) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') {
      return
    }

    const savedValue = localStorage.getItem(storageKey)

    if (savedValue != null) {
      try {
        const parsedValue = JSON.parse(savedValue)

        if (!isValidValue || isValidValue(parsedValue)) {
          setSelf(parsedValue)
        }
      } catch {
        localStorage.removeItem(storageKey)
      }
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(storageKey)
        return
      }

      localStorage.setItem(storageKey, JSON.stringify(newValue))
    })
  }

export const taskListState = atom({
  key: 'taskListState',
  default: [],
  effects: [
    localStorageEffect(
      'recoil-task-list',
      (value) =>
        Array.isArray(value) &&
        value.every(
          (task) =>
            typeof task?.id === 'string' &&
            typeof task?.text === 'string' &&
            typeof task?.completed === 'boolean',
        ),
    ),
  ],
})

export const taskFilterState = atom({
  key: 'taskFilterState',
  default: 'all',
  effects: [
    localStorageEffect(
      'recoil-task-filter',
      (value) => ['all', 'completed', 'pending'].includes(value),
    ),
  ],
})
