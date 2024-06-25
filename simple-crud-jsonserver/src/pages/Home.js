import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// -- Data strcutre --
// "id" : 101,
// "name" : "anu",
// "email" : "anu@yahoo.com",
// "number" : 9876987609


// --- interface can be used only in typeScript --
// interface jsonData{
//     id : number;
//     name : String;
//     email : String;
//     number : number;
// }

function Home() {

    // const array = [1,2,3,4,5]

    const navigate = useNavigate();

    const [columnsName, setColumnsName] = useState([]);
    const [records, setRecords] = useState([]);

    // const [data, setData] = useState();
    // const [isPending, setIsPending] = useState<boolean>(true);
    // const [error, setError] = useState<any | null>(null);

    useEffect(()=>{
        // ---- axios ----
        // ---------------
        axios.get('http://localhost:3030/users')
        .then(response=>{
            console.log("response", response)
            debugger
            setColumnsName(Object.keys(response.data[0]))
            console.log('columnsName', columnsName)
            setRecords(response.data)
            console.log('records', records)
        })

        // ---- Simple fetch ----
        // ----------------------
        // fetch('http://localhost:3000/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         // setData(data)
        //         setColumnsName(Object.keys(data[0]))
        //         setRecords(data)
        //     })
        //     .catch(error => console.error('Error fetching data:', error));

        //  --- Simple fetch with setTimeout ---
        // -------------------------------------
        // setTimeout(() => {
        //     fetch('http://localhost:3000/users')
        //         .then(res => {
        //             if (!res.ok) {
        //                 throw Error('Error fetching users data');
        //             }
        //             return res.json();
        //         })
        //         .then(data => {
        //             setData(data);
        //             // setIsPending(false);
        //             // setError(null);
        //         })
        //         .catch(err => {
        //             // setIsPending(false);
        //             setError(err.message);
        //         });
        // }, 1000);
    },[])

    const goToAdd = () => {
        navigate('create');
    };

    function handleEditClick(id){
        navigate(`update/${id}`);
    }
    function handleDeleteClick(id){
        const confirm = window.confirm("Do ypu want to delete?")
        if(confirm){
            axios.delete(`http://localhost:3030/users/${id}`)
            .then(response=>{
                console.log("Home-delete-response",response)
                alert("Record deleted succesfully")
            }).catch(err=>console.error(err))
        }
        // navigate('delete');
    }

  return (
    <div className='container mt-5'>
        {/* <tbody> */}
            <button onClick={goToAdd}>
                 {/* <Link to="create">Add</Link> */}
                 add
            </button>
        <table className='table'>
                <thead>
                <tr>
                    {columnsName.map((cname)=>(
                        <th>
                            {cname}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {/* forEach does not return a new array, while map does, making it suitable for rendering lists in JSX. */}
                    {records.map(record => (
                        <tr>
                            <td>
                                {record.id}
                            </td>
                            <td>
                                {record.name}
                            </td>
                            <td>
                                {record.email}
                            </td>
                            <td>
                                {record.number}
                            </td>
                            <td>
                                <button 
                                    // onClick={handleEditClick(record.id)} - caused the nagivation due to state usage
                                    onClick={() => handleEditClick(record.id)}
                                    >
                                        {/* <Link to={`update/${record.id}`}>Edit</Link> */}
                                        edit
                                </button>
                                <button 
                                    // onClick={handleDeleteClick(record.id)}
                                    onClick={() => handleDeleteClick(record.id)}
                                    >
                                        {/* <Link to="delete"}>delete</Link> */}
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        {/* </tbody> */}
    </div>
  )
}

export default Home