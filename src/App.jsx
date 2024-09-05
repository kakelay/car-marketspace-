import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [valueCount, setValue] = useState(0);
  function MyButton() {
    return <button 
    
    >I'm a button</button>;
  }
  const user = {
    name: 'Elay.Kak',
    imageUrl: "https://avatars.githubusercontent.com/u/110383694?v=4",
    imageSize: 290,
    userId:'112'
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Add your network image here */}
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/110383694?v=4"
          alt="Network Image"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div className="card">
        <button onClick={() => setValue((valueCount) => valueCount + 1)}>
          Value is : {valueCount}
        </button>
        <button onClick={() => setCount((valueCount) => valueCount + 1)}>
          count is {valueCount}
        </button>
        <div>
          <MyButton />
        </div>
      </div>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          id:user.userId
        }}
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
