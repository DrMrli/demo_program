import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const envName = import.meta.env.DEV ? '开发环境' : '生产环境';
  const appTitle = import.meta.env.VITE_APP_TITLE || '未配置';
  const apiUrl = import.meta.env.VITE_API_URL || '未配置';

  return (
    <>
      <div className="env-info">
        <h2>环境变量配置展示</h2>
        <div className="env-item">
          <span className="env-label">当前环境：</span>
          <span className="env-value">{envName}</span>
        </div>
        <div className="env-item">
          <span className="env-label">应用标题：</span>
          <span className="env-value">{appTitle}</span>
        </div>
        <div className="env-item">
          <span className="env-label">API 地址：</span>
          <span className="env-value">{apiUrl}</span>
        </div>
      </div>
      <hr />
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
