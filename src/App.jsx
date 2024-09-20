import { useState } from 'react';
import './App.css';
import { Child } from './components/Child';
// import { MyFirstComponent } from './components/MyFirstComponent';
// import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';

function App() {

  const [name, setName] = useState("Wendy Katherinne Gomez Villa");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <hr className='white-hr'/>
        {/* <MyFirstComponent /> */}
        <hr className='white-hr'/>
        {/* <SecondComponent /> */}
        <hr className='white-hr'/>
        <ThirdComponent
          name="Inés"
          last_name="Oliveros"
          age="20"
        />
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
