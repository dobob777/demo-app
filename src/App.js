import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

// import React, { useState } from 'react'
// import Add from './Compo/Add'
// import List from './Compo/List'

// const App = () => {
//   const [allData, setAllData] = useState([]);


//   // Add data in state array
//   const submitData = (event) => {

//     event.preventDefault()
//     const obj = {
//       name: event.target.name.value,
//       email: event.target.email.value
//     }
//     setAllData([...allData, obj]);
//     event.target.reset()
//   }

//   const deleteData = (id) => {
//     const newData = allData.filter((ele, index) => {
//       return index != id
//     })
//     setAllData(newData)
//   }
//   return (
//     <>
//       <center>
//         <Add submitData={ submitData } />
//         <List
//           allData={ allData }
//           deleteData={ deleteData }
//         />
//       </center>
//     </>
//   )
// }

// export default App