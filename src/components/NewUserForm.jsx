import React, {useState} from 'react'
import {useFormik} from 'formik'
import data from '../data'
import {useEffect} from 'react'

function NewUserForm({toggleForm}) {

    // const [first, setFirst] = useState('')
    // const [last, setLast] = useState('')
    // const [city, setCity] = useState('')
    // const [country, setCountry] = useState('')
    // const [jobTitle, setJobTitle] = useState('')
    // const [employer, setEmployer] = useState('')
    // const [movieTitle1, setMovieTitle1] = useState('')
    // const [movieTitle2, setMovieTitle2] = useState('')
    // const [movieTitle3, setMovieTitle3] = useState('')
    // // const [users, setUsers] = useState(data)

    // const update = e => {
    //     switch(e.target.name) {
    //         case 'first':
    //             setFirst(e.target.value)
    //             break;
    //         case 'last':
    //             setLast(e.target.value)
    //             break;
    //         case 'city':
    //             setCity(e.target.value)
    //             break;
    //         case 'county':
    //             setCountry(e.target.value)
    //             break;
    //         case 'jobTitle':
    //             setJobTitle(e.target.value)
    //             break;
    //         case 'employer':
    //             setEmployer(e.target.value)
    //             break;
    //         case 'movieTitle1':
    //             setMovieTitle1(e.target.value)
    //             break;
    //         case 'movieTitle2':
    //             setMovieTitle2(e.target.value)
    //             break;
    //         case 'movieTitle3':
    //             setMovieTitle3(e.target.value)
    //             break;
    //         default:
    //             e.preventDefault()
    //     }
    // }

    // const addUser = () => {        
    //     data.push({
    //         id: data.length+1,
    //         name: {
    //             first,
    //             last
    //         },
    //         city,
    //         country,
    //         employer,
    //         jobTitle,
    //         favoriteMovies: [movieTitle1, movieTitle2, movieTitle3]
    //     }) 
    //     alert ("You've been added!")
    //     // setUsers(prevState => {
    //     //     return prevState(users)
    //     //   })
    // }

    // useEffect(() => {
    //     data.push({
    //         id: data.length+1,
    //         name: {
    //             first,
    //             last
    //         },
    //         city,
    //         country,
    //         employer,
    //         jobTitle,
    //         favoriteMovies: [movieTitle1, movieTitle2, movieTitle3]
    //     }) 
    // alert ("You've been added!")
    // setUsers(prevState => {
    //     return prevState(users)
    //   })
    // }, [])

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
            // data.push({
            //     id: data.length + 1,
            //     name: {
            //         first,
            //         last
            //     },
            //     city,
            //     country,
            //     employer,
            //     jobTitle,
            //     favoriteMovies: [movieTitle1, movieTitle2, movieTitle3]
            // })
            // alert("You've been added!")
            console.log('Form data', values)
        }
    })
    // console.log('Form values', formik.values)

    return (
        <div className='flex justify-center items-center bg-slate-200 flex-col'>
            <form onSubmit={formik.handleSubmit}>
                <h3>Add yourself as a User!</h3>
                <input
                    name='first'
                    type='text'
                    placeholder='First Name'
                    value={formik.values.first}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <input
                    name='last'
                    type='text'
                    placeholder='Last Name'
                    value={formik.values.last}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <input
                    name='city'
                    type='text'
                    placeholder='City'
                    value={formik.values.city}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <input
                    name='country'
                    type='text'
                    placeholder='Country'
                    value={formik.values.country}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <input
                    name='jobTitle'
                    type='text'
                    placeholder='Job Title'
                    value={formik.values.jobTitle}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <input
                    name='employer'
                    type='text'
                    placeholder='Employer Name'
                    value={formik.values.employer}
                    // onChange={update}
                    onChange={formik.handleChange}></input>
                <label>What are you're favorite movies?</label>
                <input
                    name='movieTitle1'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle1}
                    // onChange={e => setMovieTitle1(e.target.value)}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle2'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle2}
                    // onChange={e => setMovieTitle2(e.target.value)}
                    onChange={formik.handleChange}></input>
                <input
                    name='movieTitle3'
                    type='text'
                    placeholder='Movie Title'
                    value={formik.values.movieTitle3}
                    // onChange={e => setMovieTitle3(e.target.value)}
                    onChange={formik.handleChange}></input>
                <button type='submit' className='text-white bg-blue-500 rounded-md w-11' onClick={() => {toggleForm()}}>Add</button>
                <button className='text-white bg-blue-500 rounded-md w-16' onClick={toggleForm}>Cancel</button>
            </form>
        </div>
    )
}

export default NewUserForm