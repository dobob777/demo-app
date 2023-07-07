import React from 'react'
import { useState } from 'react'

const App = () => {
  const [checkbox, setCheckbox] = useState(false)
  console.log('checkbox::: ', checkbox);
  // const [Name, setName] = useState('Dharam')
  // const changeSetName = (e) => {
  //   console.log('e::: ', e.target.value);
  //   setName(e.target.value)
  // }

  // const changeSetRadio = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.checked);
  // }

  // const changeSetChbox = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.checked);
  //   setCheckbox(!checkbox)
  // }
  return (
    <div>
      {/* <input type="text" onChange={ changeSetName } value={ Name } /> */ }
      {/* <input
        name='gender'
        type="radio"
        onChange={ changeSetRadio }
        value={ 'Male' } />Male
      <input
        name='gender'
        type="radio"
        onChange={ changeSetRadio }
        value={ 'Female' }
      />Female */}


      {/* <input checked={ checkbox ? 'checked' : '' } onChange={ changeSetChbox } type="checkbox" value={ 'hello' } />Hello
      <input onChange={ changeSetChbox } type="checkbox" value={ 'Ashish' } />Ashish
      <input onChange={ changeSetChbox } type="checkbox" value={ 'Prashant' } />Prashant */}
    </div>
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