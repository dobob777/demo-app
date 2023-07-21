// https://jsonplaceholder.typicode.com/comments
import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [allData, setAllData] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  const [sIndex, setSIndex] = useState(0);
  const [lIndex, setLIndex] = useState(25)
  const [cPage, setCPage] = useState(1)

  useEffect(() => {
    async function clickToSave() {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then((data) => {
          // console.log(data);
          setAllData(data)
          setTotalPage(data.length / 25)

        })
    }
    clickToSave()
  }, [])

  const cNext = () => {

    if (totalPage > cPage) {
      setCPage(cPage + 1)
      const id = cPage + 1;
      const lastPageNo = 25 * id;
      const fPageNo = lastPageNo - 25;
      setSIndex(fPageNo)
      setLIndex(lastPageNo)
    }
  }

  const pClick = () => {

    if (1 < cPage) {
      setCPage(cPage - 1)
      const id = cPage - 1;
      const lastPageNo = 25 * id;
      const fPageNo = lastPageNo - 25;
      setSIndex(fPageNo)
      setLIndex(lastPageNo)
    }
  }
  const ashish = (id) => {
    setCPage(id)


    const lastPageNo = 25 * id;
    const fPageNo = lastPageNo - 25;
    setSIndex(fPageNo)
    setLIndex(lastPageNo)
  }
  return (
    <>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item" ><a className={ 1 < cPage ? "page-link" : "page-link disabled " } onClick={ pClick } href="#" >Previous</a></li>
            {
              Array.from({ length: totalPage }).map((ele, index) => {
                return (
                  <li key={ index } className={ cPage == index + 1 ? "page-item active" : "page-item" }><a onClick={ () => ashish(index + 1) } className="page-link" href="#">{ index + 1 }</a></li>
                )
              })
            }
            <li className="page-item"><a className={ totalPage > cPage ? " page-link " : "page-link disabled" } onClick={ cNext } href="#">Next</a></li>
          </ul>
        </nav>
        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              allData.slice(sIndex, lIndex).map((ele, index) => {
                return (
                  <tr key={ index }>
                    <td>{ ele.id }</td>
                    <td>{ ele.name }</td>
                    <td>{ ele.email }</td>
                    <td>{ ele.body }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App



// import React from 'react'
// import ashish from './Hello'

// const App = () => {
//   const data = ashish('https://jsonplaceholder.typicode.com/comments');
//   // console.log('data::: ', data);
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App
