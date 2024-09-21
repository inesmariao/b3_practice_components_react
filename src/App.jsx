import { useState } from 'react';
import './App.css';
import { Child } from './components/Child';
import { FourthComponent } from './components/FourthComponent';

function App() {

  const [name, setName] = useState("Wendy Katherinne Gomez Villa");

  return (
    <div className="App">
      <header className="App-header">
        <hr className='white-hr'/>
        <FourthComponent />
        <hr className='white-hr'/>
        <Child
          name={name}
          setName={setName}
        />
        <hr className='white-hr'/>
      </header>
    </div>
  )
};

export default App
