import React from 'react';
import { Header } from './components/header.js';
import Content  from './components/content.js';
import { Footer } from './components/footer.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import Cities from './components/cities';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/rootReducer";
//import store from './store/cityReducer';
import './App.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Router>
                <Switch>
                <Route exact={true} path="/" component={Content} />
                  <Route path="/cities" component={Cities} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/itinerary"  component={Signup} />
                </Switch>  
                <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
