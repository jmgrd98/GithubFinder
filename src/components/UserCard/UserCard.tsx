import React from 'react'
import { UserProps } from '../../types/user'
import {MdLocationPin} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { UserCardStyle } from './style'


export default function UserCard({login, avatar_url, location, followers, following}:UserProps) {
  return (
    <UserCardStyle>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>

      <div className="location">
      <p><MdLocationPin/></p>
      <span>{location}</span>
      </div>

      <div className='followContainer'>

      <div className="followers followCard">
        <span>Seguidores</span>
        <p>{followers}</p>
      </div>

      <div className="following followCard">
        <span>Seguindo</span>
        <p>{following}</p>
      </div>

    </div>

      <Link to ={`/repos/${login}`} className='RepoLink'>Ver melhores projetos</Link>
    </UserCardStyle>
  )
}
