import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { SearchStyle } from './style'

export default function Search() {
  return (
    <SearchStyle>
    
    <h2>Busque por um usuário:</h2>
    <p>Conheça os melhores repositórios!</p>

    <div>
        <input type="text" placeholder='Digite o nome do usuário' />
    </div>

    </SearchStyle>
  )
}
