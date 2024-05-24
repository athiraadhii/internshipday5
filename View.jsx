import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import AddEmployees from './AddEmployees'


const View = () => {
    var[users,SetUsers]=useState([])
    var[update,setUpdate]=useState(false)
    var[singleValue,setsingleValue]=useState([])



    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
            console.log(res.data)
            SetUsers(res.data)
        })
    },[])

const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/delete/"+id)
    .then((response)=>{
        alert(response.data)
        window.location.reload(true)
    }).catch((err)=>console.log(err))

}

const updateValues=(val)=>{
    console.log("updated")
    setUpdate(true)
    setsingleValue(val)
}



var finalJSX=<TableContainer>
      <Table >
        <TableHead><br /><br /><br /><br />
          <TableRow>
            <TableCell>Ename</TableCell>
            <TableCell >Eage</TableCell>
            <TableCell>Eposition</TableCell>
            <TableCell>Esalary</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {users.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.ename}</TableCell>
                        <TableCell>{val.eage}</TableCell>
                        <TableCell>{val.eposition}</TableCell>
                        <TableCell>{val.esalary}</TableCell>
                        <TableCell>
                            <Button  color='warning' varient="contained" onClick={()=>updateValues(val)}>update</Button>
                        </TableCell>
                        <TableCell>
                            <Button color='secondary' variant="contained" onClick={()=>deleteValue(val._id)}>delete</Button>
                        </TableCell>
                    </TableRow>
                    
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>

    
  

if(update) finalJSX = <AddEmployees data={singleValue} method = 'put'/>
return finalJSX

        }
export default View