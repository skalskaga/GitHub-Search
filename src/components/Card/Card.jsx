import React from 'react';
import Repositories from '../Repositories/Repositories';
import './Card.scss';

const Card = (props) => {

  return (
    <div className='user-card'>
      <section className='user-card_header'>
        <div className='image-wrapper'>
          <img
            src={props.user.avatar_url}
            alt='user avatar'
            width='260'
            height='260'
          />
        </div>
        <div className='user-info'>
          <h3>{props.user.login}</h3>
          <p>{props.user.bio}</p>
        </div>
      </section>
      <section className='repository-section'>
        {props.user.repos
        ? <Repositories
            repos={props.user.repos}
          />
        : <p> User has no repositories ¯\_(ツ)_/¯</p>
        }
      </section>
    </div>
  )
}

export default Card


// https://github.com/primer/octicons/tree/master/lib/octicons_react#vertical-alignment
