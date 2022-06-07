import React, {useState} from 'react'
import NewUserForm from './NewUserForm'

function Navbar({increase, decrease, deleteUser, toggleEditForm}) {

    const [formDisplay, setFormDisplay] = useState(false)

    const toggleForm = e => {
        setFormDisplay(formDisplay => !formDisplay)
    }

    return (
        <div className='bg-slate-800 flex flex-row justify-between h-15 pl-1 pr-1 max-w-3xl'>
            <button className='text-white' onClick={decrease}>{'< Previous'}</button>
            <div className='h-12 space-x-4 flex items-center'>
                <button className='text-white bg-blue-500 rounded-md w-11' onClick={toggleEditForm}>Edit</button>
                <button className='text-white bg-blue-500 rounded-md w-16' onClick={deleteUser}>Delete</button>
                <button className='text-white bg-blue-500 rounded-md w-11' onClick={toggleForm}>New</button>
            </div>
            <button className='text-white' onClick={increase}>{'Next >'}</button>
            {formDisplay && <NewUserForm toggleForm={toggleForm}/>}
        </div>
    )
}

export default Navbar