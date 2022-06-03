import './App.css'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import React, {useState, useEffect} from 'react'
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
        if(index < length-1) {
            setIndex(index+1)
        } else {
            alert('This is the last user.')
        }        
    }

    const decreaseIndex = () => {
        if (index >= 1) {
            setIndex(index-1)
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
        )}
    )}


    return (
        <div className="App">
            <div>
                <UserCard data={person} length={length} index={index+1}/>
                <Navbar 
                    increase={increaseIndex}
                    decrease={decreaseIndex}
                    deleteUser={deleteUser}
                    toggleEditForm={toggleEditForm}/>
            </div>
            {cardEdit && <EditUser data={person} toggleEditForm={toggleEditForm} users={users} index={index} renderEdit={renderEdit}/>}
        </div>
    )
}

export default App
