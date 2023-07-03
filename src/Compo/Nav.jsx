import React from 'react'
import Button from './Button'
const Nav = (props) => {
    return (
        <>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">{ props.navbar.ob1 }</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{ props.navbar.ob2 }</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{ props.navbar.ob3 }</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{ props.navbar.ob4 }</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{ props.navbar.ob5 }</a></li>
                </ul>
                <Button name={ props.navbar.ob1 } />
            </header>
        </>
    )
}

export default Nav