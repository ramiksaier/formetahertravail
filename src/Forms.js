import React,{useState} from 'react'

function Forms({handleStudent}) {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleStudent({name,lastName})
        setName("")
        setLastName("")
    }
    return (
        <form onSubmit={handleSubmit}>
               <label>Name</label>
            <input onChange={handleName} value={name}/>
        <label>lastName</label>
        <input onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
        <button>Submit</button>
        </form>
    )
}

export default Forms
