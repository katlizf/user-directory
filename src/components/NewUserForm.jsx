import React from 'react'

function NewUserForm({toggleForm}) {

    return (
        <div>
            <form>
                <h3>Add yourself as a User!</h3>
                <input type='text' placeholder='First Name'></input> 
                <input type='text' placeholder='Last Name'></input> 
                <input type='text' placeholder='Job Title'></input> 
                <input type='text' placeholder='Employer Name'></input> 
                <label>What are you're favorite movies?</label>
                <input type='text' placeholder='Movie Title'></input> 
                <input type='text' placeholder='Movie Title'></input> 
                <input type='text' placeholder='Movie Title'></input>
                <button onClick={toggleForm}>Add</button>
                <button onClick={toggleForm}>Cancel</button> 
            </form>
        </div>
    )
}

export default NewUserForm