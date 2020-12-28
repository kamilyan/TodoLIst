import React from 'react';
import DisplayTodos from './components/DisplayTodos'
import './App.css' 
import TodosProvider from "./components/TodosProvider";

const App = () => {
  return (
    <>
      <div className='container'>
      <TodosProvider >
        <DisplayTodos /> 
      </TodosProvider>
      </div>
    </> 
  )
}

export default App
