import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// -- Data strcutre --
// "id" : 101,
// "name" : "anu",
// "email" : "anu@yahoo.com",
// "number" : 9876987609


function Add() {

    const nagivate =useNavigate()

    const [inputData, setInputData] = useState({id:'',name:'',email:'',number:''})

    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3030/users', inputData)
        .then(response=>alert(response))
        .catch(error=>console.log("Add-error",error))

        nagivate('/')
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>id</label>
                  <input name='id' type='number' onChange={e => setInputData( {...inputData, id:e.target.value} )}/>
              </div>
              <div>
                  <label>name</label>
                  <input name='name' type='text'  onChange={e => setInputData( {...inputData, name:e.target.value} )}/>
              </div>
              <div>
                  <label>email</label>
                  <input name='email' type='email'  onChange={e => setInputData( {...inputData, email:e.target.value} )}/>
              </div>
              <div>
                  <label>number</label>
                  <input name='number' type='number'  onChange={e => setInputData( {...inputData, number:e.target.value} )}/>
              </div>
              <div>
                  <button>submit</button>
              </div>
          </form>
      </div>
  )
}

export default Add