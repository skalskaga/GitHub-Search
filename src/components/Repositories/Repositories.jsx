import React from 'react'
import './Repositories.scss'

const Repositories = (props) => {

  if (props.repos.length === 1) {

    return (
      <>
        <p>Repository </p>
        <div>{props.repos[0].name}</div>
      </>
    )
  }

  let items = props.repos.map(item => {
    return <li key={item.id} className='repository-list_item'>{item.name}</li>
  })
  return (
    <>
      <p>Popular repositories</p>
      <ul className='repository-list'>
        {items}
      </ul>
    </>
  )
}

export default Repositories;