import React from 'react'

const Btn = ({ clickTo, dataa }) => {

    return (
        <div>
            <button style={ dataa ? { padding: "50px 0 0 0" } : { margin: "100px 0 0 0 " } } onClick={ clickTo }>Click</button>
        </div>
    )
}

export default Btn
