import React from 'react'
import { UserProps } from '../../types/user'
import {MdLocationPin} from 'react-icons/md'
import {Link} from 'react-router-dom'
import { UserCardStyle } from './style'
import {FaBuilding} from 'react-icons/fa'

export default function UserCard({login, avatar_url, location, name, bio, company, followers, following}:UserProps) {
  return (
    <UserCardStyle>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <span>{name}</span>
      <span>{bio}</span>

    <div className="companyDiv">
      <FaBuilding/>
      <span>{company}</span>
      </div>

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
