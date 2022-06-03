import React, {useState} from 'react'

function EditUser({toggleEditForm, users, data, index, renderEdit}) {

    const [first, setFirst] = useState(data.name.first)
    const [last, setLast] = useState(data.name.last)
    const [city, setCity] = useState(data.city)
    const [country, setCountry] = useState(data.country)
    const [jobTitle, setJobTitle] = useState(data.title)
    const [employer, setEmployer] = useState(data.employer)
    const [movieTitle1, setMovieTitle1] = useState(data.favoriteMovies[0])
    const [movieTitle2, setMovieTitle2] = useState(data.favoriteMovies[1])
    const [movieTitle3, setMovieTitle3] = useState(data.favoriteMovies[2])

    const makeChanges = e => {
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

    const saveChanges = () => {
        users.splice(index, 1, {
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
        alert ("Your changes have been saved!") 
    }

    return (
        <div>
            <h2>Edit Information Below</h2>
                <div>
                    <h3>Name:</h3>
                    <input 
                        type='text' 
                        onChange={makeChanges} 
                        name='first'
                        placeholder={first}></input>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='last' 
                        placeholder={last}></input>
                </div>
                <div>
                    <h3>Location:</h3>
                    <input 
                        type='text' 
                        onChange={makeChanges} 
                        name='city'
                        placeholder={city}></input>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='country'
                        placeholder={country}></input>
                </div>
                <div>
                    <h3>Job Information:</h3>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='jobTitle'
                        placeholder={jobTitle}></input>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='employer'
                        placeholder={employer}></input>
                </div>
                <div>             
                    <h3>Favorite Movies:</h3>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='movieTitle1'
                        placeholder={movieTitle1}></input>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='movieTitle2'
                        placeholder={movieTitle2}></input>
                    <input 
                        type='text' 
                        onChange={makeChanges}
                        name='movieTitle3'
                        placeholder={movieTitle3}></input>
                </div>  
                <button onClick={toggleEditForm}>Cancel</button>
                <button onClick={() => {toggleEditForm(); saveChanges(); renderEdit()}}>Save Changes</button>
                
        </div>
    )
}

export default EditUser