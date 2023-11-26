import './App.css';
import Person from './Person';
import Event from './Event';
import SumCalculator from './Sumcalculator';
import ConditionRender from './ConditionRender';
import CondRend from './CondRend';

function App() {
  return (
    <div className="App">
      <Person  name="raju" age="24"/>
      <Person name="giri" age="30"/>
      <Person name="pera" age="57"/>
      <Event/>
      <SumCalculator/>
      <ConditionRender/>
      <CondRend/>
      
    </div>
  );
}

export default App;
