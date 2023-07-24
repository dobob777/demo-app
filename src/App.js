import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [alldata, setAlldata] = useState([])
  const [nxtdata, setNxtdata] = useState([1])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
  }, [])

  const clickToNxt = () => {
    setAlldata(data)
    console.log(data);

    setCount(count + 1)
    console.log(setAlldata[count]);

    if (count > 1) {
      setNxtdata(data)
    }
  }

  const data = [
    {
      title: "quidem molestiae enim",
      content: " quidem molestiae enim quidem molestiae enim quidem molestiae enim"
    },
    {
      title: "sunt qui excepturi placeat culpa",
      content: "omnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odio"
    },
    {
      title: "omnis laborum odio",
      content: "sunt qui excepturi placeat culpasunt qui excepturi placeat culpasunt qui excepturi placeat culpa"
    },
    {
      title: "eaque aut omnis a",
      content: "eaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis a"
    },
    {
      title: "qui fuga est a eum",
      content: "qui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eum"
    },
    {
      title: "distinctio laborum qui",
      content: "distinctio laborum quidistinctio laborum quidistinctio laborum quidistinctio laborum qui"
    },
    {
      title: "consequatur autem doloribus natus consectetur",
      content: "consequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consectetur"
    },
    {
      title: "nesciunt quia et doloremque",
      content: "nesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremque"
    }
  ];


  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <div className='d-flex justify-content-around'>
            <button type="button" className="btn btn-secondary">Reset</button>
            <button type="button" className="btn btn-primary">Prev</button>
            <button onClick={ clickToNxt }
              type="button"
              className="btn btn-success">
              Next
            </button>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{ data[0].title }</h5>
          <p className="card-text">{ data[0].content }</p>



        </div>
      </div>
    </div>
  )
}

export default App
// import React, { useState } from 'react'
// import Btn from './com/Btn'

// const App = () => {
//   const [dataa, setDataa] = useState(false)
//   const clickTo = () => {
//     setDataa(!dataa);
//   }
//   return (
//     <div>
//       <Btn clickTo={ clickTo } dataa={ dataa } />
//     </div>
//   )
// }

// export default App
