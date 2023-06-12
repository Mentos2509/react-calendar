import { useState } from 'react';
import './App.css';
import Calender from './components/calender/Calender';



function App() {
  const [currentDate,SetCurrentDate] = useState(new Date())

  return (
    <div className="App">
  <Calender value={currentDate} onChange={SetCurrentDate}/>
    </div>
  );
}

export default App;
