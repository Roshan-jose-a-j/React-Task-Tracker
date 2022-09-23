//use to import Font awesome icons from react-icons
import { FaTimes } from 'react-icons/fa'


// task is a prop
const Task = ({task, onDelete, onToggle}) => {
  return (
    // the onDoubleCLick is added to the div as a whole because it affects the whole div rather than only the content
    // onDoubleClick returns the task.id of the task that is double clicked.
    //  {`{} `} is used to input conditions inside the className
    //  'task' class is added as default and the other condition is checked before adding the other class name
    // here, if the task is true, then the 'reminder' class is added else, nothing is added
    <div className={`task ${task.reminder  ? 'reminder' :'' }  `} onDoubleClick={() => onToggle(task.id)}>
        {/* task.text returns the text inside the task prop */}
        {/* Fatimes is used to display the font awesome icon */}
        <h3> {task.text} 
        <FaTimes style={{
          color: 'red',
          cursor: 'pointer',
        }} 
        // this creates a function and sends only task.id to onDelete function when onClick happens
          onClick={() => onDelete(task.id)} /> 
        </h3>
        <p> {task.day} </p>
    </div>
  )
}

export default Task
