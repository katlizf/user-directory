import React, {useContext} from 'react'
import {useFormik} from 'formik'
import {GlobalContext} from '../App'

function NewUserForm({toggleForm}) {

    const {setUsers} = useContext(GlobalContext)
    const {renderEdit} = useContext(GlobalContext)

    const formik = useFormik({
        initialValues: {
            first: '',
            last: '',
            city: '',
            country: '',
            employer: '',
            jobTitle: '',
            movieTitle1: '',
            movieTitle2: '',
            movieTitle3: ''
        },
        onSubmit: values => {
            values.name = {first: values.first, last: values.last}
            values.favoriteMovies = [values.movieTitle1, values.movieTitle2, values.movieTitle3]
            setUsers(prevState => {
                let newState = [...prevState, values]
                return newState
            })
            console.log('Form data', values)
            toggleForm()
            alert ("You've been added!")
            renderEdit()
            
        }
    })


    return (
        <div className='flex justify-center items-center bg-slate-200 flex-col'>
            <form onSubmit={formik.handleSubmit}>
                <h3>Add yourself as a User!</h3>
                <input
                    name='first'
                    type='text'
                    placeholder='First Name'
                    value={formik.values.first}
                    onChange={formik.handleChange}></input>
                <input
                    name='last'
                    type='text'
                    placeholder='Last Name'
                    value={formik.values.last}
                    onChange={formik.handleChange}></input>
                <input
                    name='city'
                    type='text'
                    placeholder='City'
                    value={formik.values.city}
                    onChange={formik.handleChange}></input>
                <input
                    name='country'
                    type='text'
                    placeholder='Country'
                    value={formik.values.country}
                    onChange={formik.handleChange}></input>
                <input
                    name='jobTitle'
                    type='text'
                    placeholder='Job Title'
                    value={formik.values.jobTitle}
                    onChange={formik.handleChange}></input>
                <input
                    name='employer'
                    type='text'
                    placeholder='Employer Name'
                    value={formik.values.employer}
                    onChange={formik.handleChange}></input>
                <label>What are you're favorite movies?</label>
                <input
                    name='movieTitle1'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle1}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle2'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle2}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle3'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle3}
                    onChange={formik.handleChange}></input>
                <button type='submit' className='text-white bg-blue-500 rounded-md w-11'>Add</button>
                <button className='text-white bg-blue-500 rounded-md w-16' onClick={toggleForm}>Cancel</button>
            </form>
        </div>
    )
}

export default NewUserForm