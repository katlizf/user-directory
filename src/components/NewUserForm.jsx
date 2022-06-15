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
            toggleForm()
            alert("You've been added!")
            renderEdit()

        }
    })


    return (
        <div className='form'>
            <form onSubmit={formik.handleSubmit}>
                <h2 className='form-header'>Add yourself as a User!</h2>
                <div className='multiple-fields'>
                    <h3>Name:</h3>
                    <input
                        name='first'
                        type='text'
                        className='input'
                        placeholder='First Name'
                        value={formik.values.first}
                        onChange={formik.handleChange}></input>
                    <input
                        name='last'
                        type='text'
                        className='input'
                        placeholder='Last Name'
                        value={formik.values.last}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='multiple-fields'>
                    <h3>Location:</h3>
                    <input
                        name='city'
                        type='text'
                        className='input'
                        placeholder='City'
                        value={formik.values.city}
                        onChange={formik.handleChange}></input>
                    <input
                        name='country'
                        type='text'
                        className='input'
                        placeholder='Country'
                        value={formik.values.country}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='multiple-fields' >
                    <h3>Job Information:</h3>
                    <input
                        name='jobTitle'
                        type='text'
                        className='input'
                        placeholder='Job Title'
                        value={formik.values.jobTitle}
                        onChange={formik.handleChange}></input>
                    <input
                        name='employer'
                        type='text'
                        className='input'
                        placeholder='Employer Name'
                        value={formik.values.employer}
                        onChange={formik.handleChange}></input>
                </div >
                <h3>What are your favorite movies?</h3>
                <input
                    name='movieTitle1'
                    type='text'
                    className='input'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle1}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle2'
                    type='text'
                    className='input'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle2}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle3'
                    type='text'
                    className='input'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle3}
                    onChange={formik.handleChange}></input>
                <div className='form-btns'>
                    <button className='btn-large' onClick={toggleForm}>Cancel</button>
                    <button type='submit' className='btn-xl'>Add New User</button>
                </div>
            </form >
        </div >
    )
}

export default NewUserForm