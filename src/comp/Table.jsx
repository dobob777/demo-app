import React from 'react'
import { useState } from 'react'

const Table = () => {

    const [count, setCount] = useState([])
    const [sahil, setSahil] = useState()
    const [no, setNo] = useState(null)
    const clickTo = () => {
        const abc = {
            name: '',
            email: '',
            dis: false
        }
        setNo(count.length)
        setCount([...count, abc])
    }
    const clickTodis = () => {
        // 
        const abcd = count.filter((e, index) => {
            return index == no
        })
        abcd[0].dis = true
        abcd[0] = count[no]
        console.log(abcd);
        // setCount([...count, abc])
    }

    return (
        <>
            <button onClick={ clickTo }>Add+</button>
            {
                count.map((ele, index) => {
                    return (
                        <tr key={ index }>
                            <th>Name: <input disabled={ ele.dis ? "disabled" : null } type="text" /></th>
                            <th>Email: <input disabled={ ele.dis ? "disabled" : null } type="text" /></th>

                        </tr>
                    )
                })
            }
            <button onClick={ clickTodis }>save</button>
        </>
    )
}

export default Table
