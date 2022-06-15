import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import {useFormik} from 'formik'


function EditUser({toggleEditForm, users, data, index, renderEdit}) {

    const {setPerson} = useContext(GlobalContext)

    const formik = useFormik({
        initialValues: {
            first: data.first,
            last: data.last,
            cityName: data.city,
            countryName: data.country,
            employerName: data.employer,
            jobTitle: data.title,
            movieTitle1: data.movieTitle1,
            movieTitle2: data.movieTitle2,
            movieTitle3: data.movieTitle3
        },
        onSubmit: values => {
            values.name = {first: values.first, last: values.last}
            values.favoriteMovies = [values.movieTitle1, values.movieTitle2, values.movieTitle3]
            setPerson(values => {
                let newState = [users[index], values]
                return newState
            })
            toggleEditForm()
            alert("Your changes have been saved!")
            renderEdit()
        }
    })


    return (
        <div className='form'>
            <form onSubmit={formik.handleSubmit}>
                <h2 className='form-header'>Update This User Below</h2>
                <div className='multiple-fields'>
                    <h3>Name:</h3>
                    <input
                        name='first'
                        type='text'
                        className='input'
                        placeholder={data.name.first}
                        value={formik.values.first}
                        onChange={formik.handleChange}></input>
                    <input
                        name='last'
                        type='text'
                        className='input'
                        placeholder={data.name.last}
                        value={formik.values.last}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='multiple-fields'>
                    <h3>Location:</h3>
                    <input
                        name='city'
                        type='text'
                        className='input'
                        placeholder={data.city}
                        value={formik.values.city}
                        onChange={formik.handleChange}></input>
                    <input
                        name='country'
                        type='text'
                        className='input'
                        placeholder={data.country}
                        value={formik.values.country}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='multiple-fields'>
                    <h3>Job Information:</h3>
                    <input
                        name='jobTitle'
                        type='text'
                        className='input'
                        placeholder={data.title}
                        value={formik.values.title}
                        onChange={formik.handleChange}></input>
                    <input
                        name='employer'
                        type='text'
                        className='input'
                        placeholder={data.employer}
                        value={formik.values.employer}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='multiple-fields'>
                    <h3>Favorite Movies:</h3>
                    <input
                        name='movieTitle1'
                        type='text'
                        className='input'
                        placeholder={data.favoriteMovies[0]}
                        value={formik.values.movieTitle1}
                        onChange={formik.handleChange}></input>
                    <input
                        name='movieTitle2'
                        type='text'
                        className='input'
                        placeholder={data.favoriteMovies[1]}
                        value={formik.values.movieTitle2}
                        onChange={formik.handleChange}></input>
                    <input
                        name='movieTitle3'
                        type='text'
                        className='input'
                        placeholder={data.favoriteMovies[2]}
                        value={formik.values.movieTitle3}
                        onChange={formik.handleChange}></input>
                </div>
                <div className='form-btns'>
                    <button className='btn-large' onClick={toggleEditForm}>Cancel</button>
                    <button type='submit' className='btn-xl'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser