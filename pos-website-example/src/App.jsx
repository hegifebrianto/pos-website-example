
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckOutPage from './pages/CheckOutPage'



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
          <Route path="/cartPage">
            <CartPage />
          </Route>
          <Route path="/checkoutPage">
            <CheckOutPage />
          </Route>
       
        </Switch>
      </div>
      </Router>
    </>
  )
}

export default App
