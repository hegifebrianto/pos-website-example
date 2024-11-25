
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {/* <NewHeader /> */}
        <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
       
        </Switch>
      </div>
      </Router>
    </>
  )
}

export default App
