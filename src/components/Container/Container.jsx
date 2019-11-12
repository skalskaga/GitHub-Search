import React from 'react'
import './Container.scss';

const Container = (props) => {
    let msg;
    if (props.isStarted) msg = 'home'
    if (props.isError) msg = 'error'
    if (props.isLoading) msg = 'loading'
    if (props.user) return 'card component'

    return (
        <main>
            {msg
            ? msg
            : 'import card comp'
            }
        </main>
    )
}

export default Container;