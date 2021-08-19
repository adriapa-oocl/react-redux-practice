import './App.css';
import TodoList from "./features/todos/components/TodoList";
import { Route, Link, BrowserRouter, Switch} from "react-router-dom";
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notfound/NotFoundPage';
import { useDispatch } from 'react-redux';
import { getTodos } from './features/apis/todos';
import { AddTodos } from './features/todos/reducers/todosSlice';

function App() {

  const dispatch = useDispatch();

  getTodos().then((response) => {
    dispatch(AddTodos(response.data))
  })

  return (
    <div className="App">
      <BrowserRouter>
          <h3><Link to = "/">Home</Link> <Link to = "/done">Completed</Link></h3>
        <Switch className = "Sites">
          <Route exact path = "/" component = {TodoList}></Route>
          <Route exact path = "/done" component = {DoneList}></Route>
          <Route path = "*" component = {NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;