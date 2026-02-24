import { useRecoilValue } from 'recoil'
import { filteredTasksSelector } from '../selectors/filteredTasksSelector'
import TaskItem from './TaskItem'

function TaskList() {
  const filteredTasks = useRecoilValue(filteredTasksSelector)

  if (filteredTasks.length === 0) {
    return <p className="empty">Nenhuma tarefa para exibir.</p>
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
