import React, {useState} from 'react'
import data from '../data'

function NewUserForm({toggleForm}) {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [employer, setEmployer] = useState('')
    const [movieTitle1, setMovieTitle1] = useState('')
    const [movieTitle2, setMovieTitle2] = useState('')
    const [movieTitle3, setMovieTitle3] = useState('')
    // const [users, setUsers] = useState(data)

    const update = e => {
        switch(e.target.name) {
            case 'first':
                setFirst(e.target.value)
                break;
            case 'last':
                setLast(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'county':
                setCountry(e.target.value)
                break;
            case 'jobTitle':
                setJobTitle(e.target.value)
                break;
            case 'employer':
                setEmployer(e.target.value)
                break;
            case 'movieTitle1':
                setMovieTitle1(e.target.value)
                break;
            case 'movieTitle2':
                setMovieTitle2(e.target.value)
                break;
            case 'movieTitle3':
                setMovieTitle3(e.target.value)
                break;
            default:
                e.preventDefault()
        }
    }

    const addUser = () => {        
        data.push({
            id: data.length+1,
            name: {
                first,
                last
            },
            city,
            country,
            employer,
            jobTitle,
            favoriteMovies: [movieTitle1, movieTitle2, movieTitle3]
        }) 
        alert ("You've been added!")
        // setUsers(prevState => {
        //     return prevState(users)
        //   })
    }

    return (
        <div>
            <form>
                <h3>Add yourself as a User!</h3>
                <input 
                    type='text'
                    placeholder='First Name'
                    name='first'
                    onChange={update}></input> 
                <input 
                    type='text'
                    placeholder='Last Name'
                    name='last'
                    onChange={update}></input> 
                <input
                    type='text'
                    placeholder='City'
                    name='city'
                    onChange={update}></input>
                <input
                    type='text'
                    placeholder='Country'
                    name='country'
                    onChange={update}></input>
                <input
                    type='text'
                    placeholder='Job Title'
                    name='jobTitle'
                    onChange={update}></input> 
                <input
                    type='text'
                    placeholder='Employer Name'
                    name='employer'
                    onChange={update}></input> 
                <label>What are you're favorite movies?</label>
                <input
                    type='text'
                    placeholder='Movie Title'
                    name='movieTitle1'
                    onChange={e => setMovieTitle1(e.target.value)}></input> 
                <input
                    type='text'
                    placeholder='Movie Title'
                    name='movieTitle2'
                    onChange={e => setMovieTitle2(e.target.value)}></input> 
                <input
                    type='text'
                    placeholder='Movie Title'
                    name='movieTitle3'
                    onChange={e => setMovieTitle3(e.target.value)}></input>
                <button onClick={() => {toggleForm(); addUser()}}>Add</button>
                <button onClick={toggleForm}>Cancel</button> 
            </form>
        </div>
    )
}

export default NewUserForm