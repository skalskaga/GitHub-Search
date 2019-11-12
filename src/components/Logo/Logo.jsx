import React from 'react';
import Octicon, { MarkGithub } from '@primer/octicons-react'

import './Logo.scss';

const Logo = () => {
  return (
    <a
      className='page-header_logo'
      href='/'
      aria-label='home'
      >
      <Octicon
        className='page-header_logo__icon'
        ariaLabel='GitHub'
        icon={MarkGithub}
      />
    </a>
  )
}

export default Logo
