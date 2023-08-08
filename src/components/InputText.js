import React, { useState } from 'react'

function InputText() {

   const [text, setText] = useState('');
   const [question,setQuestion] = useState(); 
   
   const handleSubmit = () => {
    console.log(text);
    console.log(question); 
   }

  return (
    <div>
        <textarea 
        placeholder='Enter the text here...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <input 
        placeholder='Enter your Question' 
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputText