import './App.css'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import data from './data'
import EditUser from './components/EditUser'


function App() {

    const [index, setIndex] = useState(0)
    const [users, setUsers] = useState(data)
    const [person, setPerson] = useState(users[index])
    const [cardEdit, setCardEdit] = useState(false)
    let length = users.length

    useEffect(() => {
        setPerson(users[index])
    }, [users, index])

    const increaseIndex = () => {
        if (index < length - 1) {
            setIndex(index + 1)
        } else {
            alert('This is the last user.')
        }
    }

    const decreaseIndex = () => {
        if (index >= 1) {
            setIndex(index - 1)
        } else {
            alert('This is the first user.')
        }
    }

    const deleteUser = () => {
        setUsers(prevState => {
            return prevState.filter(user => user !== users[index])
        })
    }

    const toggleEditForm = e => {
        setCardEdit(cardEdit => !cardEdit)
    }

    const renderEdit = () => {
        setUsers(prevState => {
            return prevState.filter(user => user !== cardEdit
            )
        }
        )
    }


    return (
        <div >
            <h1 className='flex justify-start bg-blue-500 h-16 pl-8 pt-4 text-lg font-semibold'>Home</h1>
            <div className='bg-slate-800 w-screen h-screen flex justify-center items-center'>
                <div className='w-9/12 h-3/6'>
                    <UserCard data={person} length={length} index={index + 1} />
                    <Navbar
                        increase={increaseIndex}
                        decrease={decreaseIndex}
                        deleteUser={deleteUser}
                        toggleEditForm={toggleEditForm}
                    />
                </div>
                {cardEdit && <EditUser data={person} toggleEditForm={toggleEditForm} users={users} index={index} renderEdit={renderEdit} />}</div>
        </div>
    )
}

export default App
