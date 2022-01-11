import './App.css';
import UyelikContext from './UyelikContext';
import { useContext } from 'react';
import Anasayfa, { Hakkinda, Iletisim, Hizmetler } from './sayfalar'
import Gizlilik from './Gizlilik';
import Uyelik from './Uyelik';

function App() {
  const ctx = useContext(UyelikContext);
  return (
    <div className="App">
      <h1>Uygulamam ({ctx.uyeAdi})</h1>
      <Anasayfa />
      <Hakkinda />
      <Hizmetler />
      <Iletisim />
      <Gizlilik />
      <Uyelik />
    </div>
  );
}

export default App;
