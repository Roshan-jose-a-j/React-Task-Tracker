
// the details inside the Button like color, text and onClick are the props. Instead of passing all, we are just passing the required ones.
const Button = ({ color,text,onClick }) => {
  
  
  
  return (
    // this creates a button and it is then sent to the header.js file


  <button 
  // onClick calls the function onclick in the Header.js file when a click is detected on the button
  onClick={onClick}
  className='btn'
  style={{ backgroundColor: color}} 
  className= 'btn'> 
  {text} 
  </button>
)
}

Button.defaultProps={
  color: 'Steelblue'
}

export default Button
