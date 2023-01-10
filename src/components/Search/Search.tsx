import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { SearchStyle } from './style'
import { useState, KeyboardEvent } from 'react'

type SearchProps = {
    loadUser: (userName:string) => Promise<void>
}

export default function Search({loadUser}:SearchProps) {

const [userName, setUserName] = useState('')

function handleKeyDown(e:KeyboardEvent){
    if(e.key === 'Enter'){
        loadUser(userName)
    }
}


  return (
    <SearchStyle>
    
    <h2>Busque por um usuário:</h2>
    <p>Conheça os melhores repositórios!</p>

    <div>
        <input
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder='Digite o nome do usuário' />
        <button onClick={() => loadUser(userName)}>
            <BsSearch className="searchIcon" size={20}/>
        </button>
    </div>

    </SearchStyle>
  )
}
