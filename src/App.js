import logo from './logo.svg';
import './App.css';
import Person from './Components/index';
import FunctionalComponent from './Components/FunctionalComponent'
import Lifecycle from './Components/Lifecycle';


function App() {
  return (
    <div>
    <Person age="45" address="tangalle"/>
     <Lifecycle/>
     <FunctionalComponent/>
    </div>
  )
  // const handleokClick=()=>{
  //   console.log("Ok button clicked");
  // }

  // const handleCancelClick=()=>{
  //   console.log("Cancel button clicked");
  // }
  // const handleInputChange=(event,name)=>{
  //   console.log(event.target.value +name);
  // }
  // return (
  //   <div >
  //     <Clock/>
  //     <button onClick={handleokClick}>Ok</button>
  //     <button onClick={handleCancelClick}>Cancel</button>
  //     <input type='text' onChange={(event)=>handleInputChange(event,"Amal")}/>
  //   </div>
  // );
  

   
}

export default App;
