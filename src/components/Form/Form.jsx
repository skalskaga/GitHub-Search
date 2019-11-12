import React from 'react'

import './Form.scss';

const Form = (props) => {
  return (
    <form
      onSubmit={props.submitHandler}
    >
      <input
        type='text'
        placeholder='Jump to...'
        role='search'
        className='form-input'
        onChange={props.changeHandler}
        value={props.typedValue}
      />
      <input
        type='submit'
        value='Search'
        className='form-button'
      />
    </form>
  )
}

export default Form;
