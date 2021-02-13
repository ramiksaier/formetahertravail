import React,{useState} from 'react'
import './App.css';
import CounterClass from './CounterClass';
import CounterFunc from './CounterFunc';
import Forms from './Forms';

function App() {
const [student,setStudent]=useState({name:"",lastName:""})

const handleStudent=(newStudent)=>{
setStudent(newStudent)
}
  return (
    <div className="App">
    {/* <CounterClass />  */}
    <CounterFunc />
     <Forms handleStudent={handleStudent} />
    <h4>Name:{student.name}</h4>
    <h4>lastname:{student.lastName}</h4> 
    </div>
  );
}

export default App;
