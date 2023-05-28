import Products, { ProductsVariant } from "./components/Products/Products";
import { useEffect, useState } from "react";
import api from "./services/dataApi";
import UsersList from "./components/UsersList/UsersList";
import { Todo, User } from "./types/types";
import List from "./components/List/List";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [state, setState] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await api.getUsers();
        setUsers(data);
        console.log(data);
      } catch (err: any) {
        setError(err.message);
        console.log(err.message);
      }
    };
    getUsers();

    const getTodos = async () => {
      try {
        const data = await api.getTodos({ _limit: 12 });
        setTodos(data);
        console.log(data);
      } catch (err: any) {
        setError(err.message);
        console.log(err.message);
      }
    };
    getTodos();
  }, []);
  const handleClick = (num: number) => {
    console.log("num", num);
    setState((prev) => prev + num);
    // return 15;
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold underline">Hello TS</h1>
      <b>{state}</b>
      <Products
        width="400px"
        onClick={handleClick}
        variant={ProductsVariant.primary}
      ></Products>
      {users?.length ? <UsersList users={users} /> : <p>{error}</p>}
      {todos?.length ? (
        //   перевикористовуваний ліст, можна передати в нього будь-який список
        <List
          items={todos}
          renderItem={(todo) => <TodoItem todo={todo} key={todo.id} />}
        />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default App;
