import '../App.css';
import Counter from './Counter';
import TextField from './TextField';
import Checkbox from './Checkbox';
import TwoVariables from './TwoVariables';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>Text Field Example</h1>
      <TextField />
      <h1>Checkbox (Boolean)</h1>
      <Checkbox />

      <h1>Handling two variables</h1>
      <TwoVariables />
    </div>
  );
}

export default App;
