import React, {useEffect, useReducer} from 'react';
import TodoList from "./TodoList";
import "./TodoListStyle.css";




 

const Home =()=> {
    useEffect(() => {
        document.title = 'Hello World' 
      });
    return(
        <div>
            Home
            <h1>
                Filter Employees
            </h1>

            <TodoList />
        </div>
    )
};

export default Home;