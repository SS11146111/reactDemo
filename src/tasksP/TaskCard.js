
export const TaskCard = ({task, handleDelete}) => {
  return (
    <li className={task.completed ? "complete" : "incomplete"}>
        <span>{task.id} - {task.name}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}
