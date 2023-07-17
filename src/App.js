
import React, { useEffect, useState } from 'react'
// UseEffect

// Type useEffect

// 1. Every time call
// 2. One time call-----------
// 3. Specific call



function App() {

  const [email, setEmail] = useState('');
  // console.log('email::: ', email);
  const [password, setPassword] = useState('');
  // console.log('password::: ', password);


  // 2. One time call-----------
  // useEffect(() => {
  //   setEmail('abcd@xyz.com')
  //   setPassword('12345678')
  // }, [])

  // 1. Every time call
  // useEffect(() => {
  //   console.log('i am called...');
  // })

  // 3. Specific call
  useEffect(() => {
    // console.log('email called....');
    setPassword(email)
  }, [email])


  const emailCh = (e) => {
    setEmail(e.target.value)
    // setPassword(email)
  }

  const passCh = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div style={ { width: "500px" } }>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            onChange={ emailCh }
            value={ email }
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={ passCh }
            value={ password }
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </main>
    </div>
  )
}

export default App

// useEffect(() => {
//   const fData = async () => {
//       fetch("https://jsonplaceholder.typicode.com/comments", {
//           method: "GET",
//       })
//           .then((res) => res.json())
//           .then((data) => {
//               console.log('data::: ', data);
//           }).catch((errr) => {
//               console.log('errr::: ', errr);
//           })
//   }
//   fData();
// }, [])