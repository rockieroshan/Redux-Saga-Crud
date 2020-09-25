import React, { Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Newproduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import Loader from './components/Loader/index';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Provider store={store}>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products/new" component={Newproduct} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
            </Switch>
          </div>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
