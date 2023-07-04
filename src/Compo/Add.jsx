import React from 'react'

const Add = () => {
    return (
        <>
            <div>
                <form>
                    <label
                        className='mt-3'
                        htmlFor="name">
                        Name
                        <input
                            required
                            type="text"
                            id='name'
                            name='name' />
                    </label>
                    <br />
                    <label
                        required
                        className='mt-3'
                        htmlFor="email">
                        Email
                        <input
                            type="email"
                            id='email'
                            name='email' />
                    </label>
                    <br />
                    <button className='mt-3' type='submit'>Add Data</button>
                </form>
            </div>
        </>
    )
}

export default Add