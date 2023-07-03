import React from 'react'
import Props2 from './Compo/Props2'
import { useState } from 'react'

const Props = () => {
    const [data] = useState(['abhay', 'sahil', 'ashish', 'dharam'])
    const [number, setNumber] = useState(0)
    console.log(data.length)
    const clickToChange = () => {
        console.log("number ::::", number == data.length)
        if (number == data.length - 1) {
            setNumber(0)
        } else {
            setNumber(number + 1)
        }

    }

    return (
        <>
            <label htmlFor="name">Name:<input type="text" value={ data[number] } /></label><br /><br />
            <button onClick={ clickToChange }>click</button>

        </>
    )
}

export default Props