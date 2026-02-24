import { useSetRecoilState } from 'recoil'
import { taskListState } from '../atoms/tasksAtom'

function TaskItem({ task }) {
  const setTaskList = useSetRecoilState(taskListState)

  const handleToggleTask = () => {
    setTaskList((previousTasks) =>
      previousTasks.map((item) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  const handleRemoveTask = () => {
    setTaskList((previousTasks) =>
      previousTasks.filter((item) => item.id !== task.id),
    )
  }

  return (
    <li className="task-item">
      <span className={task.completed ? 'done' : ''}>{task.text}</span>
      <div className="task-actions">
        <button onClick={handleToggleTask}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button className="remove" onClick={handleRemoveTask}>
          Remover
        </button>
      </div>
    </li>
  )
}

export default TaskItem
