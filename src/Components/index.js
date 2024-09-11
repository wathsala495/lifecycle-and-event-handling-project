import React, { Component } from "react";

// class Clock extends React.Component {

//     constructor(props){
//         super(props);

//         this.state={
//             date:new Date()
//         }
//     }
//     componentDidMount(){
//         console.log("mounted")
//     }
//     componentWillUnmount(){
//         console.log("will unmounted")
//     }

    
//   render() {
//     return (
//       <div>
//        <div>Time is:{this.state.date.toISOString()}</div>
        
//       </div>
//     );
//   }
// }
// export default Clock ;

class Person extends Component {
    
  constructor(props){
    super(props)
  }

   render(){
    return(
      <div className="person">
        <h1>Age:{ this.props.age}</h1>
        <p>Name:{this.props.address}</p>
      </div>
    )
   }
}
export default Person;