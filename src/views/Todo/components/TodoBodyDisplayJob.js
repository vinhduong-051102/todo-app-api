import {  useContext } from 'react'
import { dataContext } from '../context/dataContext'
function TodoBodyDisplayJob({ job }) {
    const data = useContext(dataContext)
    const {  handleStatus, handleEditJob, handleDeleteJob } = data
    return (
            <tr
                key = {job.id} 
            >
                <td>{ job.name }</td>
                <td>
                    { job.status }
                </td>
                <td>
                    <button 
                        className="btn btn--primary mr-15 pointer"
                        onClick = { (e) => handleStatus(e.target.innerText, job.id) }
                    >
                        New
                    </button>
                    <button 
                        className="btn btn--primary mr-15 pointer"
                        onClick = { (e) => handleStatus(e.target.innerText, job.id) }
                    >
                        Depending
                    </button>
                    <button 
                        className="btn btn--primary mr-15 pointer"
                        onClick = { (e) => handleStatus(e.target.innerText, job.id) }
                    >
                        Complete
                    </button>
                    <button 
                        className="btn btn--primary mr-15 pointer"
                        onClick = { () => handleEditJob(job.id, job.name) }
                    >
                        Edit
                    </button>
                    <button 
                        className="btn btn--secondary mr-15 pointer"
                        onClick = { () => handleDeleteJob(job.id) }
                    >
                        Delete
                    </button>
                </td>
            </tr>     
    )
}

export default TodoBodyDisplayJob