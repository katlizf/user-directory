import './App.css'
import UserCard from './components/UserCard'
import Navbar from './components/Navbar'
import React, {useState, useEffect} from 'react'
import data from './data'


function App() {

    const [index, setIndex] = useState(0)
    const [users, setUsers] = useState(data)
    const [person, setPerson] = useState(users[index])
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

    return (
        <div className="App">
            <UserCard data={person} length={length} index={index+1}/>
            <Navbar 
                increase={increaseIndex}
                decrease={decreaseIndex}
                deleteUser={deleteUser}/>
        </div>
    )
}

export default App
