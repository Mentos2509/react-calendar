import { useState } from "react";
import "./App.css";
import Calender from "./components/calender/Calender";
import { format } from "date-fns";

function App() {
  const [currentDate, SetCurrentDate] = useState(new Date());

  return (
    <div className="App">
      <div>
        <p>{format(currentDate, "dd LLLL yyyy")}</p>
      </div>
      <Calender value={currentDate} onChange={SetCurrentDate} />
    </div>
  );
}

export default App;
