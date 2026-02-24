import { useRecoilState } from 'recoil'
import { taskFilterState } from '../atoms/tasksAtom'

function TaskFilters() {
  const [currentFilter, setCurrentFilter] = useRecoilState(taskFilterState)

  return (
    <div className="filters">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => setCurrentFilter('all')}
      >
        Todas
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => setCurrentFilter('completed')}
      >
        Concluídas
      </button>
      <button
        className={currentFilter === 'pending' ? 'active' : ''}
        onClick={() => setCurrentFilter('pending')}
      >
        Pendentes
      </button>
    </div>
  )
}

export default TaskFilters
