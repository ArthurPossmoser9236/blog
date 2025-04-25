import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Blog from './assets/componentes/blog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="containerGlobal">
      <Blog />
    </div>
  );
}

export default App;
