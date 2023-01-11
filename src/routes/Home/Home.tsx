import React, { useState } from 'react'
import Search from '../../components/Search/Search'
import UserCard from '../../components/UserCard/UserCard'
import { UserProps } from '../../types/user'
import Error from '../../components/Error/Error'

export default function Home() {

const [user, setUser] = useState<UserProps | null>(null)
const [error, setError] = useState(false)


async function loadUser(userName:string){
    
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    if(res.status === 404){
        setError(true)
        return
    } 

    const {avatar_url, login, name, bio, company, location, followers, following} = data
    const userData: UserProps = {
        avatar_url,
        login,
        name,
        bio,
        company,
        location,
        followers,
        following
    }
    setUser(userData)
    console.log(data)
}


  return (
    <div>
        <Search loadUser={loadUser}/>
        {user && <UserCard{...user}/>}
        {error && <Error/>}


    </div>
  )
}
