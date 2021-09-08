import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//  import List from './listKey';
import Lifecycle from './lifecycle1';
import Hookdemo from './hooks1';
import Form from './form';
import Formikform from "./formformik";


//lifecycle demo
// class Main extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//     this.state={
//       id:0,
//     show:true}
//   }
//   render()
//   {
//     return(
//       <>
//       <h1>Parent Component</h1>
//       <h2>ID:{this.state.id}</h2>
//       <button onClick={()=>{this.setState({id:this.state.id+1})}}>Change ID</button>
//       <button onClick={()=>{this.setState({show:(!this.state.show)})}}>Show/Hide child Component</button>
//       {/* {this.state.show? <Lifecycle id={this.state.id}/>:<></>} */}
//       {this.state.show? <Hookdemo />:<></>}
//       {/*</Lifecycle> */}
//       </>
//     )
//   }
// }



ReactDOM.render(
    <Formikform/>,
  document.getElementById('root')
);



