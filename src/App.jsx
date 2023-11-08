import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    // Convert the input value to a number and update the count state
    setCount(Number(event.target.value));
  };

  const addOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const subtractOne = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <input type="number" onChange={handleInputChange} value={count} />
        <span><button onClick={addOne}>Add</button>
        <button onClick={subtractOne}>Subtract</button></span>

      </header>
    </div>
  );
}

export default App;
