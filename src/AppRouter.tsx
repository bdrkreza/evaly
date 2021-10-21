import ProductDetails from 'Components/Home/ProductDetails';
import Checkout from 'Pages/Home/Checkout';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Help = React.lazy(() => import('./Pages/Help/Help'));

export const AppRouter: React.FC = ({ children }) => {
  return (
    <div>
      <Router>
        {children}
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route path="/checkout/" component={Checkout} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};
