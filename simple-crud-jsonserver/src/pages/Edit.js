import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    // const id = useParams() - it returns an object containing key
    const { id } = useParams();
    const nagivate = useNavigate()

    const [editValue, setEditValue] = useState({id:'',name:'',email:'',number:''})

    useEffect(()=>{
        // axios.get('http://localhost:3030/users'+id) - incorrect URL construction, issue was with 'id' setting as object => GET /users[object%20Object] 404 6.937 ms - 2
        axios.get(`http://localhost:3030/users/${id}`)
        .then(reponse => {
            console.log("edit-response",reponse);
            setEditValue(reponse.data)
        }).catch(error=>console.log(error))
    },[])

    // const updateServer = () =>{
    //     console.log("edit-updateServer-editValue",editValue);

    //     // for update/edit dont use POST, its PUT
    //     axios.put('http://localhost:3030/users/'+id, editValue)
    //     .then(response=>{
    //         console.log("edit-updateServer-response",response)
    //         alert("updated successfully")
    //     }).catch(error=>{
    //         conmsole.log("error",error)
    //     })
    // }

    function handleSubmit(event){
        event.preventDefault()

        // updateServer

        console.log("edit-updateServer-editValue",editValue);

        // for update/edit dont use POST, its PUT
        axios.put('http://localhost:3030/users/'+id, editValue)
        .then(response=>{
            console.log("edit-updateServer-response",response)
            alert("updated successfully")
        }).catch(error=>{
            conmsole.log("error",error)
        })
        
        nagivate('/')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
              <div>
                  <label>id</label>
                  <input name='id' type='number' disabled value={editValue.id} />
              </div>
              <div>
                  <label>name</label>
                  <input name='name' type='text' value={editValue.name}  onChange={e => setEditValue( {...editValue, name:e.target.value} )}/>
              </div>
              <div>
                  <label>email</label>
                  <input name='email' type='email' value={editValue.email}  onChange={e => setEditValue( {...editValue, email:e.target.value} )}/>
              </div>
              <div>
                  <label>number</label>
                  <input name='number' type='number' value={editValue.number}  onChange={e => setEditValue( {...editValue, number:e.target.value} )}/>
              </div>
              <div>
                  <button>submit</button>
              </div>
          </form>
    </div>
  )
}

export default Edit