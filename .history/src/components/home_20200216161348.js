import React, {useEffect, useReducer} from 'react';
import TodoList from "./TodoList";
import "./TodoListStyle.css";

useEffect(() => {
    document.title = 'Hello World' 
  });

  // eslint-disable-next-line no-undef
  const [state, dispatch] = useReducer(reducer, initialArg, init);

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