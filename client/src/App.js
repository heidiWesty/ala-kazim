import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/backend").then(
      res => res.json()

    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.backend === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.backend.map((backArray, i) => (
          <p key={i}>{backArray}</p>
        ))
      )}
    </div>
  )
}

export default App
