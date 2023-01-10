import React, { useState } from 'react'
import Search from '../components/Search/Search'
import { UserProps } from '../types/user'


export default function Home() {

const [user, setUser] = useState<UserProps | null>(null)

async function loadUser(userName:string){
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    console.log(data)
}

  return (
    <div>
        <Search/>
    </div>
  )
}
