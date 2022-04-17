import TodoBodyTitle from "./TodoBodyTitle"
import TodoBodyDisplayJob from "./TodoBodyDisplayJob"
import { dataContext } from '../context/dataContext'
import { useContext } from 'react'
function TodoBody() {
    const data = useContext(dataContext)
    const { jobs, jobSearch, handleSearchJob } = data
    return (
        <div className="todo__task task">
            <div className="task__title"> 
                <p>Task</p>
                <input 
                    placeholder = "Search ... "
                    value = { jobSearch }
                    onChange = { (e) => handleSearchJob(e.target.value) }
                />
            </div>
                <div className="task__content content">
                    <table className="task__table table">
                        <TodoBodyTitle /> 
                        <tbody>
                            {jobs.map((job, index) => 
                                <TodoBodyDisplayJob 
                                    key = { index }
                                    job = { job }
                                />
                            )}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
export default TodoBody