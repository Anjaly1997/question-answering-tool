import './App.css';
import AppBar from './components/AppBar';
import CustomTabPanel from './components/CustomTabsPanel'
import DisplayAnswer from './components/DisplayAnswer';

function App() {
 

  return (
    <div className='App'>
      <AppBar />
      <h1>Question Answering Tool</h1>
      <h3>Empowering Curiosity and Learning: Your Gateway to Precise Answers – The Question-Answering Tool</h3>
     <CustomTabPanel/>
    </div>
  );
}

export default App;
