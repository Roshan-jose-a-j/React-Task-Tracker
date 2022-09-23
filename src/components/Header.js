import Button from './Button'

// const header is a default function with props as the parameter(generally an object) that is passed in the App.js
const Header = (props) => {

  


  return (
    <header className='header'>
        {/* props.title returns the value given in title in the App.js file */}
        {/* <h1> {props.title}</h1> */}
        {/* <h1> {props.newtitle} </h1> */}
        {/* props.defaulttitle displays the default title because its not mentioned in App.js */}
        <h1> {props.defaulttitle}</h1>
        {/* this is used to add a button by calling the button.js file  */}
        {/* onClick is a event listener where once the click is detected, then its object details are sent to App.js */}
        {/* the color and text are changed depending upon the state of the button which is stored in (showAdd) */}
        <Button color={props.showAdd ? 'red' : 'green'}  text={props.showAdd ? 'Close' : 'Add' } onClick={props.onAdd} />
        {/* <Button color='red' text='Hey' /> */}
        {/* <Button color='blue' text='Bye' /> */}
    </header>
  )
}
//this is a default prop ie if there are no tags matching the mentioned one, then it is used
Header.defaultProps={
    defaulttitle: 'Task Tracker'
}

//add headingStyle variable inside an HTML tag in the above tag like [style = '{headingStyle}'] to use it
const headingStyle={
    color: 'red',
    backgroundColor: 'black'
}

export default Header
