import { useRef, useContext } from 'react'
import { dataContext } from '../context/dataContext'
function TodoHeader() {
    const data = useContext(dataContext)
    const {  job, isEdit, handleSubmit, handleInputJob } = data
    const inputRef = useRef()
    return (
        <div className="todo__add add">
            <div className="add__title">Add a task</div>
            <div className="add__content content">
                <p className="content__title">item</p>
                <input
                    className="content__input-todo"
                    placeholder="What do you want to do?"
                    name="inputTask"
                    value = { job }
                    onChange = { (e) => handleInputJob(e.target.value) }
                    ref = { inputRef }
                />
                <p className="content__note">Enter what you want to procastinate </p>
                <button 
                    className="content_submit btn btn--primary pointer"
                    onClick = { () => handleSubmit(inputRef) }
                >
                    {isEdit ? 'Change' : 'Submit'}
                </button>
            </div>
        </div>
    )
}

export default TodoHeader