import React from 'react'
import './Container.scss';

import Card from '../Card/Card';

const Container = (props) => {

	let msg;
	if (props.isStarted) msg = 'Welcome! Type Github user name and hit enter to display user info!'
	if (props.isError) msg = 'User does not exist. Try to type another Github user name'
	if (props.isError && props.user.length === 0) msg = 'Github user name must be provided.'
	if (props.isLoading) msg = 'Loading Github data. Wait please'
	if (props.user.login) return <Card user={props.user} />

	return (
		<main className='main-container'>
			{msg? msg : 'Unknown error occured. Please try again'}
		</main>
	)
}

export default Container;