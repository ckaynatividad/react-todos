
import { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import { getUser, logout } from './services/users';
import AddTodo from './views/AddTodo';
import Auth from './views/Auth';
import EditTodo from './views/EditTodo';
import TodoList from './views/TodoList';

function App() {
  const [user, setUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user && (
              <>
                <TodoList />
                <NavLink className="words" to="/add">Add new</NavLink>
                <Footer />
                <button onClick={logoutUser}>Log out</button>
              </>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
          <Route exact path="/add">
            {user && (
              <TodoList />
            )}
            {!user && <Auth setUser={setUser} />}
            <AddTodo />
          </Route>
          <Route exact path="/:id/edit">
            {user && (
              <><h1>Edit task</h1><EditTodo /></>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
          <Route exact path="/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
