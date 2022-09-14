
// 5 On-OFF buttons 

import './App.css';
import bulb_off from './components/images/bulb_off.jpg';
import bulb_on from './components/images/bulb_on.jpg';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.changeState =this.changeState.bind(this)
    this.state = {arr: [{
      'button': false
    },
    {
      'button': false
    },
    {
      'button': false
    },
    {
      'button': false
    },
    {
      'button': false
    }]
    };
  }
     
  changeState =(index)=>{
    let temp =this.state.arr;
    temp[index].button=!(temp[index].button);
    this.setState({arr:temp});
} 

  render(){
    return(
      <div>
      
      {this.state.arr.map((ele,index)=>{
              return (<div><img src={ele.button?bulb_off:bulb_on}></img><button onClick={()=>this.changeState(index)} >{ele.button?"OFF":"ON"}</button></div>)
           })}
     </div>
  )
  }
}
export default App


// 1- on-off bulb

// import './App.css';
// import bulb_off from './components/images/bulb_off.jpg';
// import bulb_on from './components/images/bulb_on.jpg';
// import React from 'react'


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       'button': 'False'
//     }
//   }
//   changeState =()=>{
//     this.setState((state)=>{ 
//       return{
//         button:!state.button}
//     });
// }
 
//   render(){
//     return(
//       <div>
//       <img src={this.state.button?bulb_off:bulb_on}></img>
//       <button onClick={()=>this.changeState()} >{this.state.button?"OFF":"ON"}</button>
//       </div>
//   )
//   }
// }
// export default App
    

  

// function App() {


  // var users =[ {
  //  'id':1,
  //  'title':'bring milk',
  //  'completed':0 
  // },
  // {
  //   'id':2,
  //   'title':'bring grain',
  //   'completed':1
  //  },  
  //  {
  //   'id':3,
  //   'title':'bring clothed',
  //   'completed':1
  //  }]
  // const comment = {
  //   date: new Date(),
  //   text: 'I hope you enjoy learning React!',
  //   author: {
  //     name: ['Hello Kitty','Hello Mini'],
  //     avatarUrl: 'http://placekitten.com/g/64/64'
  //   }
  // };

  // function formatDate(date) {
  //   return date.toLocaleDateString();
  // }

  // function Comment(props) {
  //   return (
  //     <div className="Comment">
  //       <div className="UserInfo">
  //         <img className="Avatar"
  //              src={props.author.avatarUrl}
  //              alt={props.author.name} />
  //         <div className="UserInfo-name">
  //           {props.author.name.length?props.author.name.map((ele,index)=>{
  //             return (<p> {index} ----- {ele} </p>)
  //           }):null}
  //         </div>
  //       </div>
  //       <div className="Comment-text">
  //         {props.text}
  //       </div>
  //       <div className="Comment-date">
  //         {formatDate(props.date)}
  //       </div>
  //     </div>
  //   );
  // }

//   return (
//     <div className="App">
//     {/* <h1>To do list</h1>
//     <div>
//       <table><th>
//         <td> id </td>
//         <td> Title </td>
//         <td> Status</td>
//       </th></table>
//     {
//      users.length?users.map((ele, index) => {
//      return (
//      <table> 
//       <tr>
//       <td>{ele.id}</td>
//       <td>{ele.title}</td>
//       <td>{ele.completed}</td>
//      </tr>
//      </table>
//      )
//     }):null
//     }
//     </div> */}
  
//     {/* <div>{formatDate(new Date())}</div>

//     <Comment 
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//     />
//     <Comment {...comment} />
//     */}
//     </div>
    
//   );
// }


