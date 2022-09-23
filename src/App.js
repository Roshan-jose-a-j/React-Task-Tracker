//import header takes imports the header.js file 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/Addtask'


// used to incorporate state
import { useState } from 'react'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  //essential for creating a state for tasks object  
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Doctors Appointment' , 
          day: 'Feb 5th at 2:30 pm' , 
          reminder: true,
      },

      {
          id: 2,
          text: 'Meeting at School' , 
          day: 'Feb 12th at 12:00 pm' , 
          reminder: true,
      },
      
      {
          id: 3,
          text: 'Grocery Shopping' , 
          day: 'Feb 8th at 5:00 pm' , 
          reminder: false,
      },
  ])

// Add Task

const addTask = (task) =>{
  // this function gets the input as a object from the Addtask.js module.
  // this creates a random id for the task to be added
  const id= Math.floor(Math.random()*10000+1)
  // newTask is an object containing the id and all the details like task, date and day, setreminder values.
  const newTask={id, ...task}
  // setTasks is used to change the state of the tasks . Here setTasks is just an array of objects. ...tasks specifies the tasks
  // that are already avaiable and the newTask is the new object that is added at the last.
  setTasks( [ ...tasks, newTask ] )
}

// Delete Task

const deleteTask = (id) =>{
  // setTasks is used to update the tasks field
  // tasks.filter filters out the objects that pass the condition given inside the parameter
  // here, all the tasks are filtered out such that the id that we get as a parameter from the Task.js is removed and all the others are still present
  // Note: 'task' is just a variable at runtime. task.id resembles the objects in the 'tasks' whereas id references the object that is taken from Task.js
  setTasks(tasks.filter((task)=> task.id!= id  ))
}


// Toggle Remainder


const toggleRemainder = (id) =>{
  // tasks.map is used to check the status of each and every single id inside the object
  // task.id==id is a conditional statement. If it is failed, ':task' is run .i.e the task remains the same
  // if condition is true, '...task' is run which means that the changes spread accross the task object. remainder is set to the opposite as remainder is boolean
  setTasks(tasks.map((task)=> task.id==id ? {...task, reminder: !task.reminder} : task))

}
  return (
    //this is a div that is essential to display the html given in the below div to the index.html
    <div className='container'>
      {/* 1) <Header /> is used to retrieve the data from the Header.js file under the <Header> tag in that file  */}
      {/* onAdd is used to to change the value of the (Add) button. onAdd changes the state of the showaddtask */}
      {/* showadd is used to store the current state of the object */}
      <Header title='Good' newtitle='bad' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
      {/* 2) Used to Incorporate the AddTask Module */}
      {/* addTask function is given as a prop for it to return an object */}
      {/* ('showAddTask &&') is used so that this module will only be used if (showAddTask=true)*/}
      {showAddTask && <AddTask onAdd={addTask} />}
         {/* 3) this encorpurates the Tasks module with tasks as the object to be fed to the Tasks.js module */}
         {/* On Delete is used to call the deleteTask function in above  */}
         {/* the condition tasks.length>0 is checked to ensure that there is atleast one task visible in the website */}
         {/* if the condition is true, then, the remaining tasks is displayed */}
         {/* else "No tasks to show" is displayed. This is a Conditional Statement */}
      {tasks.length>0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />) :
      ("No Tasks to Show")
      }
    </div>
  );
}

export default App;
