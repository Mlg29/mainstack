
import Dashboard from './screen/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './component/Layout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout><Dashboard /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
