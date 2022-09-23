import Task from './Task'

// //1. this is used incase we want to encorporate the tasks object as a state rather than just in the componenet.
// import { useState } from 'react'

// //2. const tasks creates a object that can worked on. This is only in case of an module. Otherwise, this is not required
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment' , 
//         day: 'Feb 5th at 2:30 pm' , 
//         reminder: true,
//     },

//     {
//         id: 2,
//         text: 'Meeting at School' , 
//         day: 'Feb 12th at 12:00 pm' , 
//         reminder: true,
//     },
    
//     {
//         id: 3,
//         text: 'Grocery Shopping' , 
//         day: 'Feb 8th at 5:00 pm' , 
//         reminder: false,
//     },
// ]

//this fetches data from the tasks state from the App.js as{tasks} is a prop containing the data of the object
const Tasks = ({tasks, onDelete, onToggle}) => {
  
//   //1. this is used to create a state by giving it a name(tasks) and another method to modify the state(setTasks). inside useState(), the values are given   
//   const [tasks, setTasks] = useState(
//       [
//         {
//             id: 1,
//             text: 'Doctors Appointment' , 
//             day: 'Feb 5th at 2:30 pm' , 
//             reminder: true,
//         },

//         {
//             id: 2,
//             text: 'Meeting at School' , 
//             day: 'Feb 12th at 12:00 pm' , 
//             reminder: true,
//         },
        
//         {
//             id: 3,
//             text: 'Grocery Shopping' , 
//             day: 'Feb 8th at 5:00 pm' , 
//             reminder: false,
//         },
//     ]) 
  return (
    //div is not necessary, just empty brackets(<>) are enough
    <>
      {
        // map is used to create different lists of different objects
        // key is used to generate an unique reference for each list.
        // 'tasks is the prop ie the object containing the data whereas task is just a variable given to the map function   '
          tasks.map((task) =>(
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))
      }
    </>
  )
}

export default Tasks
