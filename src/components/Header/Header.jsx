import React from 'react';
import Form from '../Form/Form';
import Logo from '../Logo/Logo';

import './Header.scss'

const Header = (props) => {
  return (
    <header className='page-header'>
      <Logo />
      <Form
        submitHandler={props.submitHandler}
        changeHandler={props.changeHandler}
        typedValue={props.typedValue}
      />
    </header>
  )
}

export default Header
