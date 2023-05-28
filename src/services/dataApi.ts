import axios from "axios";
import { User } from "../types/types";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getUsers = async () => {
  const { data } = await instance<User[]>("/users");
  return data;
};

const getPosts = async () => {
  const { data } = await instance("/posts");
  return data;
};

const getTodos = async (params: any) => {
  const { data } = await instance("/todos", { params });
  return data;
};

const patchTodo = async (params: any) => {
  const { data } = await instance.patch(`/todos/${params.id}`, {
    completed: !params.completed,
  });
  return data;
};

const getComments = async () => {
  const { data } = await instance("/comments");
  return data;
};

export default { getUsers, getPosts, getTodos, patchTodo };
