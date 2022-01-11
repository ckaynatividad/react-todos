
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { getUser, logout } from './services/users';
import AddTodo from './views/AddTodo';
import Auth from './views/Auth';
import EditTodo from './views/EditTodo';
import TaskView from './views/TaskView';
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
            <TodoList />
            {user && (
              <p>Huwwo</p>
            )}
            {!user && <Auth setUser={setUser} />}
          </Route>
          <Route exact path="/add">
            {user && (
              <p>Add a task</p>
            )}
            {!user && <Auth setUser={setUser} />}
            <AddTodo />
          </Route>
          <Route exact path="/:id/edit">
            {user && (
              <p>Edit task</p>
            )}
            {!user && <Auth setUser={setUser} />}
            <EditTodo />
          </Route>
          <Route exact path="/:id">
            {user && (
              <p>Task detail</p>
            )}
            {!user && <Auth setUser={setUser} />}
            <TaskView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
