import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react'
import Todo from './Todo'
import { TodoType } from '../src/types/todo'
import Text from './Text'



function App() {
  const [todo, setTodo] = useState<Array<TodoType>>([])
  const fetchData = () => {
    axios.
      get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').
      then((res) => {
        setTodo(res.data)
      })
  }
  return (
    <div className="App">
      <button onClick={fetchData}>データ取得</button>
      <Text color={'red'} fontSize={'65px'} >ああああ</Text>
      {todo.map((t) => (
        <Todo
          key={t.id}
          title={t.title}
          userId={t.userId}
          completed={t.completed}
        />
      ))}
    </div>
  );
}

export default App;
