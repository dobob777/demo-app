import React from 'react'

const List = () => {
    const aar = [
        { name: 'Ashish', email: 'ashish@gmail.com' },
        { name: 'Dharam', email: 'dharam@gg.com' },
        { name: 'H', email: 'ok' },
        { name: 'H', email: 'ok' },
        { name: 'H', email: 'ok' }
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        aar.map((ele, index) => {
                            return (
                                <tr key={ index }>
                                    <td>{ ele.name }</td>
                                    <td>{ ele.email }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List