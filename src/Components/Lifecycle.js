import { Component } from "react";
import axios from "axios";

export default class  Lifecycle extends Component{

    state={
        data:[]
    }

    constructor(){
        super()
        console.log("con:"+"constructor")
     }
     //After components is mounted this componentDidMount call
    componentDidMount(){
        console.log("Iam from componentDidMount")
         //first method
        // const fetchData =async ()=>{
        //  const res=await fetch("https://jsonplaceholder.typicode.com/users")
        //  const json =await res.json()
        //  console.log(json)
        //   this.setState({
        //     data:json
        //   })

        // }
        // fetchData()

        //second method
        // const fetchData =async ()=>{
        //    await fetch("https://jsonplaceholder.typicode.com/users")
        //    .then(response=>response.json()) 
        //    .then(jsondata=>(console.log("jsondata:"+jsondata),this.setState({data:jsondata})))
        //    .catch((err)=>console.log(err))
        //    console.log(this.state.data)
          
        // }

        // fetchData()

        //third method
        const fetchData =async ()=>{
            await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                this.setState({
                    data:res.data
                    
                });
                console.log("response dat"+res.data)
            })
       

    }
    fetchData()
}
    


 render(){
   
    let {data}=this.state
    return(
        <div>
            {
                data.map((item,id)=>{
                    return(
                        <><p key={id}>{item.name}</p></>
                    )
                })
            }
           {/* <h1>Life Cycle Methods</h1>
           {this.state.data.map((item)=>(
            <><p>{item.name}</p>
            <p>{item.id}</p></>
            
           ))} */}
        </div>
    )
 }
}
