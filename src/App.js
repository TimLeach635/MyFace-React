import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { PostListPage } from './components/PostListPage';
import { UserDetailPage } from "./components/UserDetailPage";

function App() {
  return <Router>
    <main>
      <h1>MyFace</h1>
      <Switch>
        <Route path="/posts">
          <PostListPage />
        </Route>
        <Route path="/users/:userId">
          <UserDetailPage />
        </Route>
      </Switch>
    </main>
  </Router>;
}

export default App;
