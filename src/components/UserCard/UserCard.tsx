import React from 'react'
import { UserProps } from '../../types/user'
import {MdLocationPin} from 'react-icons/md'
import {Link} from 'react-router-dom'

export default function UserCard({login, avatar_url, location, followers, following}:UserProps) {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p><MdLocationPin/></p>
      <span>{location}</span>

      <div>
        <p>Seguidores</p>
        <p>{followers}</p>

        <p>Seguindo</p>
        <p>{following}</p>
      </div>

      <Link to ={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}
