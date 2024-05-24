import { Button, TextField, Typography } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AddEmployees = (props) => {
  var navigate= useNavigate()
  var [inputs,setInputs]=useState(props.data)

  console.log("props data:",props.data)
  console.log("props method:",props.method)



  const inputHandler= (e) =>{
    const {name,value}=e.target 
    setInputs((prevData)=>({...prevData,[name]:value}))
    console.log(inputs)
  }

const AddHandler= ()=>{
  console.log("Button clicked");
  if(props.method==="post"){
    axios.post("http://localhost:3005/view",inputs)
    .then((response)=>{
      console.log(response.data)
      alert(response.data)
      navigate('/')
    })
    .catch((err)=>console.log(err))
  }
  if(props.method==="put"){
    axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
    alert("data updated")
    navigate('/a');
    setTimeout(()=>{
      navigate('/');

    },10);
  }
}


 return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography varient='h6'>ADD EMPLOYEE NAME</Typography><br />
        <TextField id="outlined-basic" label="name" variant="outlined" name='ename' value={inputs.ename} onChange={inputHandler} />&nbsp;
        <TextField id="outlined-basic" label="age" variant="outlined"   name='eage' value={inputs.eage} onChange={inputHandler} />&nbsp;
        <TextField id="outlined-basic" label="position" variant="outlined"  name='eposition' value={inputs.eposition} onChange={inputHandler}  />&nbsp;
        <TextField id="outlined-basic" label="salary" variant="outlined"  name='esalary' value={inputs.esalary} onChange={inputHandler} />&nbsp;
        <br /><br /><br />
        <Button variant="contained" onClick={AddHandler}>ADD</Button>
        
    </div>
  )
}

export default AddEmployees