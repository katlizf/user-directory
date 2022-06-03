import React from 'react'


function UserCard({data, length, index}) { 

    return (
        <div>
            <h2>{index}/{length}</h2>
            <div>
                <h2>{data.name.first}</h2>
                <h2>{data.name.last}</h2>
            </div>
            <div>
                <h3>From: {data.city}, {data.country}</h3>
                <h3>Job Title: {data.title}</h3> 
                <h3>Employer: {data.employer}</h3>
            </div>
            <div>
                <h3>Favorite Movies:</h3>
                    <ol>
                        <li>{data.favoriteMovies[0]}</li>
                        <li>{data.favoriteMovies[1]}</li>
                        <li>{data.favoriteMovies[2]}</li>
                    </ol>
            </div>              
        </div>
    )
}

export default UserCard