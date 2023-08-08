import './App.css';
import InputText from './components/InputText';
import DisplayAnswer from './components/DisplayAnswer';
import { useState } from 'react';
import axios from 'axios';
function App() {

const [answer, setAnswer] = useState('');


const handleUserInput = ({text,question}) =>{
  axios
  .post("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
    question,
    context: text,
  })
  .then((response) => {
    setAnswer(response.data["answer"]);
  })
  .catch((error) => {
    console.error("Error fetching answer:", error);
  });
};

  return (
    <div className="App">
      <h1>Question-anwsering-tool</h1>
      <InputText onSubmit = {handleUserInput}/>
      <DisplayAnswer answer={answer}/>
    </div>
  );
}

export default App;
