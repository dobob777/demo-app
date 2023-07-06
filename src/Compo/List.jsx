import React from 'react'

const List = (props) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allData.map(
                            (ele, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ index + 1 }</td>
                                        <td>{ ele.name }</td>
                                        <td>{ ele.email }</td>
                                        <td><button onClick={ () => props.deleteData(index) }>Delete</button></td>
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