import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { taskListState } from '../atoms/tasksAtom'

function TaskInput() {
  const [taskText, setTaskText] = useState('')
  const setTaskList = useSetRecoilState(taskListState)

  const handleAddTask = (event) => {
    event.preventDefault()
    const trimmedText = taskText.trim()

    if (!trimmedText) {
      return
    }

    setTaskList((previousTasks) => [
      ...previousTasks,
      {
        id: crypto.randomUUID(),
        text: trimmedText,
        completed: false,
      },
    ])

    setTaskText('')
  }

  return (
    <form className="task-input" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskInput
