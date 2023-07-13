import React from 'react'

const Table = ({ name, email }) => {
    // const { name, email } = props
    return (
        <div>
            <label htmlFor="namer">Name:-
                <p>{ name }</p>
                <p>{ email }</p>
            </label>
        </div>
    )
}

export default Table
