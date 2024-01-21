import './App.css';
import Form from './components/Form/Form';

function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ['qwe', 'asd', 'zxc'];
const firstStr = getFirstElement(strings);

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
