import Home from './components/home/Home'
import Login from './components/login/LoginPage'
import AboutPage from './components/other/AboutPage'
import * as constants from './constants/Constants'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

    const isLoggedIn = localStorage.getItem(constants.IS_USER_LOGGED_IN)
    console.log(isLoggedIn);
    // localStorage.clear()

    return (<Router>
        <Route path='/' exact render={(props) => (<Login />)} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={AboutPage} />
    </Router>)

}

export default App