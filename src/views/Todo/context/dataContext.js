import { createContext, useState, useEffect } from 'react'
import  axios  from 'axios'
import subString from '../function/subString'
const dataContext = createContext()
function DataProvider({ children }) {
    const [job, setJob] = useState('')
    const [jobSearch, setJobSearch] = useState('')
    const [jobs, setJobs] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState(0)
    const [arrJobSearch, setArrJobSearch] = useState([])
    const [currJobs, setCurrJobs] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then((res) => setJobs(res.data))
            .catch((err) => console.log(err))
    }, [])
    const handleSubmit = async (inputRef) => {
        if(job.trim() === '' || jobs.some((item) => item.name === job.trim())) {
            alert('Invalid job')
            inputRef.current.focus();
        }
        else {
            if(isEdit) {
                const prevStatus = jobs.find((job) => job.id === id)
                await axios.put(`http://localhost:3000/jobs/${id}`, {
                    name: job,
                    status: prevStatus.status
                })
                .then(() => alert('Success Edit'))
                await axios.get('http://localhost:3000/jobs')
                    .then((res) => setJobs(res.data))
                    .catch((err) => console.log(err))
                setIsEdit(false)
                
            }
            else {
                await axios.post('http://localhost:3000/jobs', {
                    name: job,
                    status: 'New'
                })
                await axios.get('http://localhost:3000/jobs')
                    .then((res) => setJobs(res.data))
                    .catch((err) => console.log(err))
                setIsEdit(false)
            }
            inputRef.current.focus()
            setJob('')
        }
    }

    const handleInputJob = (value) => {
        setJob(value)
    }

    const handleStatus = async (data, id) => {
        if(isSearch) {
            const prevJob = jobs.find(job => job.id === id)
            await axios.put(`http://localhost:3000/jobs/${id}`, {
                name: prevJob.name,
                status: data
            })
            await axios.get('http://localhost:3000/jobs')
                .then((res) => {
                    const newArr = []
                    arrJobSearch.forEach((jobSearch) => {
                        newArr.push(res.data.find((jobData) => {
                            return jobData.id === jobSearch.id
                        }))
                    })
                    setJobs(newArr)
                })
                .catch((err) => console.log(err))
        }
        else {
            const prevJob = jobs.find(job => job.id === id)
            await axios.put(`http://localhost:3000/jobs/${id}`, {
                name: prevJob.name,
                status: data
            })
            await axios.get('http://localhost:3000/jobs')
                .then((res) => setJobs(res.data))
                .catch((err) => console.log(err))
        }
    }

    const handleEditJob = (id, name) => {
        setJob(name)
        setId(id)
        setIsEdit(true)
    }

    const handleDeleteJob = async (id) => {    
        await axios.delete(`http://localhost:3000/jobs/${id}`)
        await axios.get('http://localhost:3000/jobs')
            .then((res) => setJobs(res.data))
            .catch((err) => console.log(err))
    }
    const handleSearchJob = (data) => {
        setIsSearch(true)
        axios.get('http://localhost:3000/jobs')
            .then((res) => setCurrJobs(res.data))
            .catch((err) => console.log(err))
        setJobSearch(() => { 
            if(data === '') {
                setArrJobSearch([])
                setIsSearch(false)
                axios.get('http://localhost:3000/jobs')
                    .then((res) => setJobs(res.data))
                    .catch((err) => console.log(err))
            }
            else {
                const newArr = currJobs.filter((job) => {
                    return subString(job.name).includes(data)
                })
                setArrJobSearch(newArr);
            }
            return data
        })
    }
    useEffect(() => {
        console.log(arrJobSearch);
        setJobs(arrJobSearch)
    }, [arrJobSearch])
    const data = {
        job,
        jobs,
        isEdit,
        jobSearch,
        handleSearchJob,
        handleSubmit,
        handleInputJob,
        handleStatus,
        handleEditJob,
        handleDeleteJob
    }

    return (
        <dataContext.Provider value = { data }>
            { children } 
        </dataContext.Provider>
    )
}

export { dataContext, DataProvider }