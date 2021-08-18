import './App.css';
import TodoList from "./features/todos/components/TodoList";
import { Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom";
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notfound/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to = "/">go to the todo list page</Link>
          </li>
          <li>
          <Link to = "/done">go to the done list page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path = "/" component = {TodoList}></Route>
          <Route exact path = "/done" component = {DoneList}></Route>
          <Route path = "*" component = {NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
