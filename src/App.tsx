import './App.css';
import Form from './components/Form/Form';
import MenuList from './components/MenuList/MenuList';
import pizzaMenu from './mocks/pizza.json';

const App = () => {
  return (
    <div>
      <h1 className="text-purple-950 text-4xl font-bold underline">
        Hello world!
      </h1>
      <MenuList items={pizzaMenu} />
      <Form />
    </div>
  );
};

export default App;
