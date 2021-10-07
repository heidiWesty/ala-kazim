import React, {useState, useEffect} from 'react'

function New() {

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
        <p style={{justifyContent: 'center', display: 'flex'}}>Loading...</p>
      ) : (
        data.backend.map((backArray, i) => (
          <p style={{justifyContent: 'center', display: 'flex'}} key={i}>{backArray}</p>
        ))
      )}
    </div>
  )
}

export default New


