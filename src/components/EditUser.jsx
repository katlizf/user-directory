import React, {useContext} from 'react'
import {GlobalContext} from '../App'
import {useFormik} from 'formik'

function EditUser({toggleEditForm, users, data, index, renderEdit}) {

    const {setUsers} = useContext(GlobalContext)

    // const [first, setFirst] = useState(data.name.first)
    // const [last, setLast] = useState(data.name.last)
    // const [city, setCity] = useState(data.city)
    // const [country, setCountry] = useState(data.country)
    // const [jobTitle, setJobTitle] = useState(data.title)
    // const [employer, setEmployer] = useState(data.employer)
    // const [movieTitle1, setMovieTitle1] = useState(data.favoriteMovies[0])
    // const [movieTitle2, setMovieTitle2] = useState(data.favoriteMovies[1])
    // const [movieTitle3, setMovieTitle3] = useState(data.favoriteMovies[2])

    // const makeChanges = e => {
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

    // const saveChanges = () => {
    //     users.splice(index, 1, {
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
    //     alert ("Your changes have been saved!") 
    // }

    const formik = useFormik({
        initialValues: {
            first: data.first,
            last: data.last,
            city: data.city,
            country: data.country,
            employer: data.employer,
            jobTitle: data.jobTitle,
            movieTitle1: data.movieTitle1,
            movieTitle2: data.movieTitle2,
            movieTitle3: data.movieTitle3
        },
        onSubmit: values => {
            values.name = {first: values.first, last: values.last}
            values.favoriteMovies = [values.movieTitle1, values.movieTitle2, values.movieTitle3]
            setUsers(prevState => {
                let newState = [...prevState, values]
                return newState
            })
            console.log('Form data', values)
            toggleEditForm()
            alert ("Your changes have been saved!")
            renderEdit()
            
        }
    })

    return (
        <div className='bg-slate-200'>
            <form onSubmit={formik.handleSubmit}>
            <h2>Edit Information Below</h2>
                <div>
                    <h3>Name:</h3>
                    <input 
                        name='first'
                        type='text'
                        placeholder={data.first}
                        value={formik.values.first}
                        onChange={formik.handleChange}></input>
                    <input
                        name='last' 
                        type='text'
                        placeholder={data.last}
                        value={formik.values.last}
                        onChange={formik.handleChange}></input>
                </div>
                <div>
                    <h3>Location:</h3>
                    <input
                        name='city' 
                        type='text'
                        placeholder={data.city}
                        value={formik.values.city}
                        onChange={formik.handleChange}></input>
                    <input 
                        name='country'
                        type='text'
                        placeholder={data.country}
                        value={formik.values.country}
                        onChange={formik.handleChange}></input>
                </div>
                <div>
                    <h3>Job Information:</h3>
                    <input 
                        name='jobTitle'
                        type='text'
                        placeholder={data.jobTitle}
                        value={formik.values.jobTitle}
                        onChange={formik.handleChange}></input>
                    <input 
                        name='employer'
                        type='text'
                        placeholder={data.employer}
                        value={formik.values.employer}
                        onChange={formik.handleChange}></input>
                </div>
                <div>             
                    <h3>Favorite Movies:</h3>
                    <input 
                        name='movieTitle1'
                        type='text'
                        placeholder={data.movieTitle1}
                        value={formik.values.movieTitle1}
                        onChange={formik.handleChange}></input>
                    <input 
                        name='movieTitle2'
                        type='text'
                        placeholder={data.movieTitle2}
                        value={formik.values.movieTitle2}
                        onChange={formik.handleChange}></input>
                    <input 
                        name='movieTitle3'
                        type='text'
                        placeholder={data.movieTitle3}
                        value={formik.values.movieTitle3}
                        onChange={formik.handleChange}></input>
                </div>  
                <button className='text-white bg-blue-500 rounded-md w-16' onClick={toggleEditForm}>Cancel</button>
                <button type='submit' className='text-white bg-blue-500 rounded-md w-32'>Save Changes</button>
                </form>
        </div>
    )
}

export default EditUser