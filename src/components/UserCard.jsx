import React from 'react'


function UserCard({data, length, index}) { 

    return (
        <div className='bg-slate-200 pl-9 pr-2 h-80 flex flex-col max-w-3xl'>
            <h2 className='font-bold text-3xl text-right'>{index}/{length}</h2>
            <div className='font-bold underline underline-offset-8 text-3xl flex flex-row pb-6 decoration-blue-500'>
                <h2>{data.name.first}  {data.name.last}</h2>
            </div>
            <div className='pb-6'>
                <h3 className='font-bold'>From: <span className='font-normal'>{data.city}, {data.country}</span></h3>                
                <h3 className='font-bold'>Job Title: <span className='font-normal'>{data.title}</span></h3> 
                <h3 className='font-bold'>Employer: <span className='font-normal'>{data.employer}</span></h3>
            </div>
            <div>
                <h3 className='font-bold'>Favorite Movies:</h3>
                    <ol className='pl-7'>
                        <li>1. {data.favoriteMovies[0]}</li>
                        <li>2. {data.favoriteMovies[1]}</li>
                        <li>3. {data.favoriteMovies[2]}</li>
                    </ol>
            </div>              
        </div>
    )
}

export default UserCard