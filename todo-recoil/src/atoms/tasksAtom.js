import { atom } from 'recoil'

const localStorageEffect =
  (storageKey) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') {
      return
    }

    const savedValue = localStorage.getItem(storageKey)

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
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
  effects: [localStorageEffect('recoil-task-list')],
})

export const taskFilterState = atom({
  key: 'taskFilterState',
  default: 'all',
  effects: [localStorageEffect('recoil-task-filter')],
})
