import React, {useState} from 'react'
import NewUserForm from './NewUserForm'

function Navbar({increase, decrease, deleteUser, toggleEditForm}) {

    const [formDisplay, setFormDisplay] = useState(false)

    const toggleForm = e => {
        setFormDisplay(formDisplay => !formDisplay)
    }

    return (
        <div>
            <button onClick={decrease}>Previous</button>
            <div>
                <button onClick={toggleEditForm}>Edit</button>
                <button onClick={deleteUser}>Delete</button>
                <button onClick={toggleForm}>New</button>
            </div>
            <button onClick={increase}>Next</button>
            {formDisplay && <NewUserForm toggleForm={toggleForm}/>}
        </div>
    )
}

export default Navbar