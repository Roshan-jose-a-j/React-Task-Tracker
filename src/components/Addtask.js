import { useState } from "react"


// onAdd is a prop which has the addTask function which is responsible for retrieving data from this Addtask.js module
// and to use it in App.js
const Addtask  = ({ onAdd }) => {
    //These three are three states for the three fields Task, Day and Date, and set reminder. these are their default values
    const[text, setText]= useState('')
    const[day , setDay]= useState('')
    //As the set reminder is a checkbox, it is initially given as false
    const[reminder, setReminder]= useState(false)

    // onSubmit function is called when the submit button is clicked
    const onSubmit = (e) =>{
        //this makes sure that the default values are not retrieved, and page doesnt reload when form is submitted
        e.preventDefault();

        // if there is no text in the Task section, then this alert is popped out and the functoin is returned
        if(!text){
            alert("Please Add a Task")
            return
        }

        //if there is some text present in the task section, then text,day and reminder states are sent to the onAdd function. 
        onAdd( { text,day,reminder})

        //after the state is sent, the method to change the state reverts them to the default value.
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
        {/* these divs are the different components of the form  */}
        <div className='form-control'>
            <label>Task</label>
            <input type='text'  placeholder='Add Task' 
            // value={text} sets the text input as the value and it is used to set the State
            value={text} 
            // onChange is a event which calls the setText method to update the state
            onChange={(e)=> setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day And Time</label>
            <input type='text'  placeholder='Add Day'
            // just like in task method
            value={day} 
            onChange={(e)=> setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' 
            // checks whether the box is checked or not. reminder is the current state of the checkbox. so it can be either checked or unchecked.  
            checked={reminder}
            value={reminder} 
            // as this is a reminder, the setReminder just checks or unchecks the box depending upon the current value   
            onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>

        <input className='btn btn-block' type='submit' value='Save Task' />

    </form>
  )
}

export default Addtask
