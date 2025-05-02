import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Blog from './assets/componentes/blog';

const blogs = [
  { title: "Title01", name: "name01", text: "text01"},
  { title: "Title02", name: "name02", text: "text02"},
  { title: "Title03", name: "name03", text: "text03"}
]

const colors=['blue', 'gray', 'green', 'yellow']

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="containerGlobal">
        <Blog color={colors[contador]} title={blogs[0].title} name={blogs[0].name} text={blogs[0].text} />
        <Blog color={colors[contador]} title={blogs[0].title} name={blogs[0].name} text={blogs[0].text} />
        <Blog color={colors[contador]} title={blogs[0].title} name={blogs[0].name} text={blogs[0].text} />
      </div>

      <div>
        <p>Total de Blogs {contador}</p>
        <button onClick={()=>setContador(contador+1)}>Aumentar Blogs</button>
        <button onClick={()=>setContador(contador-1)}>Diminuir Blogs</button>
      </div>
    </>
  );
}

export default App;
