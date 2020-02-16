import React from 'react';
import TodoList from "./TodoList";
import "./TodoListStyle.css";

const Home =()=> {
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