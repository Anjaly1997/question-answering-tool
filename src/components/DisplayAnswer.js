import React from 'react'

function DisplayAnswer({answer}) {
  return (
    <div>
        {answer && <p>Answer: {answer}</p>}
        {!answer && <p>No answer found.</p>}
    </div>
  )
}

export default DisplayAnswer