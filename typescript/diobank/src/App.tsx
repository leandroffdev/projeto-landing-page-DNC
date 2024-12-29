import {useState} from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Card } from './components/Card/Card';

function App() {

  const [ value, setValue ] = useState(0);

  function adiciona() {
    setValue(value + 1);
  }
  return (
    <>
      <Header />
      <Card />
      <div>
        {value}
        <button onClick={() => adiciona()}>add</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
