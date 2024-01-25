import './App.css';
import Form from './components/Form/Form';
import MenuList from './components/MenuList/MenuList';
import pizzaMenu from './mocks/pizza.json';

function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ['qwe', 'asd', 'zxc'];
const firstStr = getFirstElement(strings);

const App = () => {
  return (
    <div>
      <h1 className="text-purple-950 text-4xl font-bold underline">
        Hello world!
      </h1>
      {/*<Form />*/}
      {/*<MenuList items={pizzaMenu} />*/}
    </div>
  );
};

export default App;
