import React, { useState } from 'react'

function InputText({onSubmit}) {

   const [text, setText] = useState('');
   const [question,setQuestion] = useState(); 
   
   const handleSubmit = () => {
    onSubmit({text, question});
   };

  return (
    <div>
        
        <textarea 
        rows='8'
        cols= '80'
        placeholder='Enter the text here...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <br />
        
        <input 
        style={{ width: '300px' }} 
        placeholder='Enter your Question' 
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button> <span>    </span>
        <button>Re-run</button>
    </div>
  )
}

export default InputText