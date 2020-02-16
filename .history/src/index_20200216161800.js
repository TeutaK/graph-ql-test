import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, NavLink} from 'react-router-dom';

//Components
import Home from "./components/home";
import Posts from "./components/posts";
import Profiles from "./components/profiles";
import PostItem from "./components/poost_item";

const App =()=> {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavLink activeStyle={{color: 'red'}} to="/home">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to={{
                        pathname: '/profiles',
                        hash: '#franchis',
                        search: '?profiles=true',
                    }}>Profiles</NavLink>
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts/" exact component={Posts}/>
                <Route path="/posts/:id" component={PostItem}/>
                <Route path="/profiles/" component={Profiles}/>
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
