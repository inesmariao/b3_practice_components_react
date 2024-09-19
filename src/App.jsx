import './App.css';
import { MyFirstComponent } from './components/MyFirstComponent';
import { SecondComponent } from './components/SecondComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fundamentos de React</h1>
        <MyFirstComponent />
        <SecondComponent />
      </header>
    </div>
  )
};

export default App
